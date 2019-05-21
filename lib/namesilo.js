const axios = require('axios')
const querystring = require('querystring')

const { actions } = require('./constants')
const parseResponse = require('./parse-response')
const utils = require('./utils')

const LIVE_API_URL = 'https://www.namesilo.com/api'
const SANDBOX_API_URL = 'http://sandbox.namesilo.com/api'

/**
 * Interact with the NameSilo API
 * You can pass either an API Key as the only parameter, or an object with more verbose configuration options.
 * @throws {Error}
 * @param {String|Object} options (String) API Key | (Object) Configuration options
 * @param  {Boolean} options.apiKey API Key
 * @param  {Boolean} [options.sandbox=false] Use sandbox/testing API
 * @param  {Function} [options.logger]
 * @param  {Function} [options.defaultPaymentId] Default `payment_id` to use for API calls that require one
 * @see https://www.namesilo.com/api_reference.php
 * @example
 * const API_KEY = '1234567890'
 *
 * NameSilo = require('namesilo')
 * ns = new NameSilo(API_KEY)
 *
 * @example
 * // With sandbox/test mode enabled
 * ns = new NameSilo({
 *   apiKey: API_KEY,
 *   sandbox: true
 * })
 */
class NameSilo {
  constructor (options) {
    if (!options || (!utils.isString(options) && !options.apiKey)) {
      throw new Error(`Unable to create NameSiloClient without providing an API key`)
    }

    if (utils.isString(options)) {
      options = { apiKey: options }
    }

    this.config = options
    this.debug = options.debug || false
    this.setLogger(options.logger)
    this.createHTTPClient(options)
    this.attachMethods()
  }

  // Set logger function
  setLogger (fn) {
    this.logger = utils.isFunction(fn) ? fn : (/* noop */) => {}
  }

  setHTTPClient (client) {
    this.axios = client
  }

  // Set up axios with 'sane' defaults & optional request logging
  createHTTPClient (options) {
    let client = axios.create({
      baseURL:  options.sandbox ? SANDBOX_API_URL : LIVE_API_URL,
      params: {
        version: 1,  // no other option is available by March 2019
        type: 'xml', // no other option is available by March 2019
        key: options.apiKey
      }
    });

    client.interceptors.response.use((response) => {
      // Do something with response data
      this.logger(response.data)
      return response
    }, (error) => {
      this.logger(error && error.response && error.response.data ? error.response.data : error)
      return Promise.reject(error)
    })
    this.setHTTPClient(client)
  }

  // Tack on all API operations that don't have a more specific method defined in the class
  attachMethods () {
    for (let action of Object.keys(actions)) {
      if (this[action]) {
        throw new Error(`Trying to add method "${action}" to new NameSilo client, but a property with that name already exists`)
      }

      let def = actions[action] || {}
      this[action] = function (options) {
        // Allow passing a string to methods only taking one argument
        // ie, ns.getDomainInfo('example.com')
        // will cal ns.getDomainInfo({ domain: 'example.com' })
        if (def.singleParam && utils.isString(options) || utils.isArray(options)) {
          options = { [def.singleParam]: options }
        }

        // Allow simplification of calling endpoints that accept an array (ie, checkTransferAvailability)
        // Allows ns.checkTransferAvailability('example.com,example.net')
        // Allows ns.checkTransferAvailability(['example.com', 'example.net'])
        // Allows ns.checkTransferAvailability({ domains: ['example.com', 'example.net'] })
        if (def.flattenArrays) {
          for (let key of def.flattenArrays) {
            if (utils.isArray(options[key])) {
              options[key] = options[key].join(',')
            }
          }
        }

        return this.post(action, options)
      }
    }
  }

  /**
   * Send a wrapped POST request to the NameSilo API.
   * See https://www.namesilo.com/api_reference.php#listDomains
   * @see https://www.namesilo.com/api_reference.php#listDomains
   * @param {String} action The API method to call (ie, `listDomains`)
   * @param {Object} [inputs={}] API Endpoint parameters as defined in NameSilo docs
   * @param {Function} [parser] ...
   * @return {Object} Parsed API response
   * @example
   * let response = await client.post('registerDomain', {
   *   domain: 'example.com',
   *   years: 2
   * }, (data) => {
   *   // ...
   *   return data
   * })
   */
  async post (action, inputs, parser) {
    if (utils.isFunction(inputs)) {
      parser = inputs
      inputs = {}
    }
    inputs = inputs || {}

    // Check for & transform boolean values in `inputs` to be either of 1 or 0
    let booleanMap = ['private', 'auto_renew']
    for (let bool in booleanMap) {
      if (!utils.isUndefined(inputs[bool]) && utils.isBoolean(inputs[bool])) {
        inputs[bool] = inputs[bool] ? 1 : 0
      }
    }

    return new Promise((resolve, reject) => {
      this.axios.post(action, querystring.stringify({ ...inputs}))
       .then((response) => {
         let data = parseResponse(response.data)
         if (this.debug) {
           data.raw = response.data
         }

         if (data.code < 300 || data.code > 399) {
           let e = new Error(data.detail)
           e.code = data.code
           e.res = data
           return reject(e)
         }

         resolve(parser ? parser(data) : data)
       })
       .catch((err) => {
         reject(err.code)
       })
    })
  }

  /**
   * Determine if you can register the specified domains.
   * See: https://www.namesilo.com/api_reference.php#checkRegisterAvailability
   * @see https://www.namesilo.com/api_reference.php#checkRegisterAvailability
   * @param {Array|String} domains Domain(s) to check
   * @return {Promise} API Reply
   * @example
   * let res = await ns.checkRegisterAvailability('namesilo.com')
   * @example
   * let res = await ns.checkRegisterAvailability('namesilo.com,namesilo.net,n#mesilo.org')
   * @example
   * let res = await ns.checkRegisterAvailability(['namesilo.com' , 'namesilo.net' , 'n#mesilo.org'])
   *
   * @example
   * // Output
   * {
   *   "code": 300,
   *   "detail": "success",
   *   "available": [
   *       {
   *           "price": 9.99,
   *           "domain": "namesilo.com"
   *       }
   *   ],
   *   "unavailable": [
   *       "namesilo.net"
   *   ],
   *   "invalid": [
   *       "n#mesilo.com"
   *   ]
   * }
   */
  checkRegisterAvailability (domains) {
    if (utils.isArray(domains)) {
      domains = domains.join(',')
    }

    return this.post('checkRegisterAvailability', { domains }, (data) => {
      for (let state of ['available', 'unavailable', 'invalid']) {
        if (!data[state]) { continue }

        if (utils.isArray(data[state].domain)) {
          data[state] = data[state].domain

        } else if (utils.isObject(data[state])) {
          data[state] = [ data[state].domain ]

        } else if (utils.isString(data[state])) {
          data[state] = []
        }
      }

      if (data.available) {
        for (let i=0; i < data.available.length; i++) {
          data.available[i].domain = data.available[i]['$t']
          delete data.available[i]['$t']
        }
      }

      return data
    })
  }

  /**
   * Change the name servers associated with the provided domain name. You must provide between 2 and 13 name servers in order for this operation to be successful.
   * See https://www.namesilo.com/api_reference.php#changeNameServers
   * @see https://www.namesilo.com/api_reference.php#changeNameServers
   * @param {String|Object} domain Domain name to modify
   * @param {Array|Undefined} nameservers Nameservers to set for domain
   * @return {Promise} API Reply
   * @example
   * let res = await ns.changeNameServers('namesilo.com', ['ns1.namesilo.com', 'ns2.namesilo.com'])
   * @example
   * let res = await ns.changeNameServers({ domain: 'namesilo.com', ns1: 'ns1.namesilo.com', ns2: 'ns2.namesilo.com' })
   * @example
   * // Output
   * { code: 300, detail: 'success' }
   */
  changeNameServers (domain, nameservers) {
    let options = utils.isObject(domain) ? domain : { domain }
    if (!utils.isObject(domain) && utils.isArray(nameservers)) {
      for (let i=0; i < 13; i++) {
        options[`ns${i+1}`] = nameservers[i]
      }
    }

    return this.post('changeNameServers', options)
  }

  /**
   * Get a list of all active domains within your account.
   * See https://www.namesilo.com/api_reference.php#listDomains
   * @see https://www.namesilo.com/api_reference.php#listDomains
   * @return {Promise} API Reply
   * @example
   * let res = ns.listDomains()
   * @example
   * // Output
   * {
   *   'code': 300,
   *   'detail': 'success',
   *   'domains': [
   *     'namesilo.com',
   *     'namesilo.net',
   *     'namesilo.org'
   *   ]
   * }
   */
  listDomains () {
    return this.post('listDomains', (data) => {
      // Flatten domains array
      if (data.domains && data.domains.domain && utils.isArray(data.domains.domain)) {
        data.domains = data.domains.domain
      }

      if (!data.domains) {
        data.domains = []
      }
      return data
    })
  }

  /**
   * Register a domain.
   * See https://www.namesilo.com/api_reference.php#registerDomain
   * @see https://www.namesilo.com/api_reference.php#registerDomain
   * @param {String|Object} domain (String) The domain to register | (Object) Object containing all API options
   * @param {Number} [years=1] The amount of years to register domain for
   * @param {Object} [options]
   * @param {Number} [options.payment_id] The ID number for the verified credit card to use for the transaction. If you do not specify a payment_id, we will attempt to process the transaction using your account funds.
   * @param {String} [options.coupon] The coupon code to apply to this order
   * @return {Promise} API Reply
   * @example
   * let res = await ns.registerDomain('example.com', 2, { private: true })
   */
  registerDomain (domain, years, options) {
    if (utils.isObject(domain)) {
      options = domain
    } else {
      options = options || {}
      options.domain = domain
      options.years = years
    }

    // if (!options.payment_id && this.config.defaultPaymentId) {
    //   options.payment_id = this.config.defaultPaymentId
    // }

    return this.post('registerDomain', options)
  }

  /**
   * Renew a domain.
   * See https://www.namesilo.com/api_reference.php#renewDomain
   * @see https://www.namesilo.com/api_reference.php#renewDomain
   * @param {String|Object} domain (String) The domain to renew | (Object) Object containing all API options
   * @param {Number} years The amount of years to renew domain for
   * @param {Object} [options]
   * @param {Number} [options.payment_id] The ID number for the verified credit card to use for the transaction. If you do not specify a payment_id, we will attempt to process the transaction using your account funds.
   * @param {String} [options.coupon] The coupon code to apply to this order
   * @return {Promise} API Reply
   * @example
   * let res = await ns.renewDomain('example.com', 2)
   * @example
   * let res = await ns.renewDomain('example.com', 2, { payment_id: 1234, coupon: 'abcd' })
   * @example
   * let res = await ns.renewDomain({ domain: 'example.com', years: 2, payment_id: 1234 })
   * @example
   * // Response
   * { code: 300,
   *   detail: 'success',
   *   message: 'Your domain renewal was successfully processed.',
   *   domain: 'namesilo.com',
   *   order_amount: 7.77
   * }
   */
  renewDomain (domain, years, options) {
    if (utils.isObject(domain)) {
      options = domain
    } else {
      options = options || {}
      options.domain = domain
      options.years = years
    }

    if (!options.payment_id && this.config.defaultPaymentId) {
      options.payment_id = this.config.defaultPaymentId
    }

    return this.post('renewDomain', options)
  }

  /*
   * Get essential information on a domain within your account including the expiration date, creation date, status, locked status and name servers.
   * @see https://www.namesilo.com/api_reference.php#getDomainInfo
   * @param {String|Object} options (String) The domain name to query | (Object) Object containing single key `domain` to query
   * @param {Object} options.domain The domain being requested
   * @return {Promise} API Reply
   *
   * @example
   * {
   *     "code": 300,
   *     "detail": "success",
   *     "created": "2018-06-06",
   *     "expires": "2020-06-06",
   *     "status": "Active",
   *     "locked": "Yes",
   *     "private": "No",
   *     "auto_renew": "No",
   *     "traffic_type": "Parked",
   *     "email_verification_required": "Yes",
   *     "portfolio": "N/A",
   *     "forward_url": "N/A",
   *     "forward_type": "N/A",
   *     "nameservers": [
   *         "NS1.NAMESILO.COM",
   *         "NS2.NAMESILO.COM"
   *     ],
   *     "contact_ids": {
   *         "registrant": 5364,
   *         "administrative": 5364,
   *         "technical": 5364,
   *         "billing": 5364
   *     }
   * }
   */
  // getDomainInfo (options) {
  //   if (utils.isString(options)) {
  //     options = { domain: options }
  //   }

  //   return this.post('getDomainInfo', options)
  // }
}

module.exports = NameSilo
