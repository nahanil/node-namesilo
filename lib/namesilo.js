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

    this.debug = options.debug || false
    this.setLogger(options.logger)
    this.createHTTPClient(options)
    this.attachMethods()
  }

  // Set logger function
  setLogger (fn) {
    this.logger = utils.isFunction(fn) ? fn : (/* noop */) => {}
  }

  // Set up axios with 'sane' defaults & optional request logging
  createHTTPClient (options) {
    this.axios = axios.create({
      baseURL:  options.sandbox ? SANDBOX_API_URL : LIVE_API_URL,
      params: {
        version: 1,  // no other option is available by March 2019
        type: 'xml', // no other option is available by March 2019
        key: options.apiKey
      }
    });

    this.axios.interceptors.response.use((response) => {
      // Do something with response data
      this.logger(response.data)
      return response
    }, (error) => {
      this.logger(error && error.response && error.response.data ? error.response.data : error)
      return Promise.reject(error)
    })
  }

  // Tack on all API operations that don't have a more specific method defined in the class
  attachMethods () {
    for (let i=0; i < actions.length; i++) {
      if (this[actions[i]]) {
        throw new Error(`Trying to add method "${actions[i]}" to new NameSilo client, but a property with that name already exists`)
      }

      this[actions[i]] = function (options) {
        return this.post(actions[i], options)
      }
    }
  }

  /**
   * Send a wrapped POST request to the NameSilo API.
   * @param {String} action The API method to call (ie, `listDomains`)
   * @param {Object} [inputs={}] API Endpoint parameters as defined in NameSilo docs
   * @param {Function} [parser] ...
   * @return {Object} Parsed API response
   * @see https://www.namesilo.com/api_reference.php
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
   * Get a list of all active domains within your account.
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
   * Determine if you can register the specified domains.
   * @param {Array|String} domains Domain(s) to check
   * @see https://www.namesilo.com/api_reference.php#checkRegisterAvailability
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

  /*
   * Renew a domain.
   * @see https://www.namesilo.com/api_reference.php#renewDomain
   * @param {Object} options
   * @param {Object} options.domain The domain you want to renew
   * @param {Object} options.years The number of years to renew the domain (must be a number between 1-10)
   * @param {Object} [options.payment_id] The ID number for the verified credit card to use for the transaction. If you do not specify a payment_id, we will attempt to process the transaction using your account funds.
   * @param {Object} [options.coupon] The coupon code to apply to this order
   * @return {Promise} API Reply
   */
  // renewDomain (options) {
  //   return this.post('renewDomain', options)
  // }

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