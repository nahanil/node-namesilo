/* eslint-disable no-undef */
const utils = require('../../lib/utils')
const { actions } = require('../../lib/constants')
const NameSilo = require('../../lib/namesilo')
const { getClient, getMockClient } = require('./test-util')

describe('NameSilo', () => {
  it('should exist', () => {
    expect(typeof NameSilo).toBe('function')
  })

  it ('should explode if no apiKey is provided to constructor', () => {
    expect(() => {
      new NameSilo()
    }).toThrow()
  })

  describe(`Generic endpoint methods`, () => {
    it(`should have ${Object.keys(actions).length} expected dynamically created endpoint methods`, () => {
      let ns = getClient()
      for (let action of Object.keys(actions)) {
        expect(typeof ns[action]).toBe('function')
      }
    })

    let action = Object.keys(actions)[0]
    it(`should return some useful response for generated method ${action}`, async () => {
      let ns = getMockClient(('success'))

      // Actually run the thing
      let data = await ns[action]({})
      expect(data.code).toBe(300)
    })

    // singleParam
    it(`should properly handle "singleParam" definition option`, async () => {
      let ns = getMockClient('getDomainInfo')
      await ns.getDomainInfo('example.com')

      expect(ns.post).toHaveBeenCalledTimes(1)
      expect(ns.post).toHaveBeenCalledWith('getDomainInfo', { domain: 'example.com' })
    })

    it(`should properly handle recieving an object with "singleParam" definition option`, async () => {
      let ns = getMockClient('getDomainInfo')
      await ns.getDomainInfo({ domain: 'example.com' })

      expect(ns.post).toHaveBeenCalledTimes(1)
      expect(ns.post).toHaveBeenCalledWith('getDomainInfo', { domain: 'example.com' })
    })

    // flattenArrays
    it(`should accept a single string parameter for single arg array type methods`, async () => {
      let ns = getMockClient('checkTransferAvailability')
      await ns.checkTransferAvailability('example.com,example.net')

      expect(ns.post).toHaveBeenCalledTimes(1)
      expect(ns.post).toHaveBeenCalledWith('checkTransferAvailability', { domains: 'example.com,example.net' })
    })

    it(`should accept a single Array parameter and join it with commans`, async () => {
      let ns = getMockClient('checkTransferAvailability')
      await ns.checkTransferAvailability(['example.com', 'example.net'])

      expect(ns.post).toHaveBeenCalledTimes(1)
      expect(ns.post).toHaveBeenCalledWith('checkTransferAvailability', { domains: 'example.com,example.net' })
    })

    it(`should accept an Array and join it with commas`, async () => {
      let ns = getMockClient('checkTransferAvailability')
      await ns.checkTransferAvailability({ domains: ['example.com', 'example.net'] })

      expect(ns.post).toHaveBeenCalledTimes(1)
      expect(ns.post).toHaveBeenCalledWith('checkTransferAvailability', { domains: 'example.com,example.net' })
    })
  })

  describe(`listDomains`, () => {
    it(`should flatten domains array`, async () => {
      let ns = getMockClient(('listDomains'))
      let data = await ns.listDomains()

      expect(utils.isArray(data.domains)).toBe(true)
      expect(utils.isString(data.domains[0])).toBe(true)
    })

    it(`should always return an array`, async () => {
      let ns = getMockClient(('listDomains_2'))
      let data = await ns.listDomains()

      expect(utils.isArray(data.domains)).toBe(true)
    })
  })

  describe(`changeNameServers`, () => {
    it(`should accept an object { domain, ns1, ns2, ... } as first param`, async () => {
      let ns = getMockClient(('changeNameServers'))
      await ns.changeNameServers({ domain: 'example.com', ns1: 'ns1.example.com', ns2: 'ns2.example.com' })

      expect(ns.post).toHaveBeenCalledTimes(1)
      expect(ns.post).toHaveBeenCalledWith('changeNameServers', { domain: 'example.com', ns1: 'ns1.example.com', ns2: 'ns2.example.com' })
    })

    it(`should accept array of nameservers as second param`, async () => {
      let ns = getMockClient(('changeNameServers'))
      await ns.changeNameServers('example.com', ['ns1.example.com', 'ns2.example.com'])

      expect(ns.post).toHaveBeenCalledTimes(1)
      expect(ns.post).toHaveBeenCalledWith('changeNameServers', { domain: 'example.com', ns1: 'ns1.example.com', ns2: 'ns2.example.com' })
    })
  })

  describe(`checkDomainAvailability`, () => {
    it(`should accept a string string input`, async () => {
      let ns = getMockClient('checkRegisterAvailability')
      await ns.checkRegisterAvailability('example.com')

      expect(ns.post).toHaveBeenCalledTimes(1)
      expect(ns.post.mock.calls[0][1]).toEqual({ domains: 'example.com' })
    })

    it(`should accept an array as input`, async () => {
      let ns = getMockClient('checkRegisterAvailability')
      await ns.checkRegisterAvailability(['example.com', 'example.net'])

      expect(ns.post).toHaveBeenCalledTimes(1)
      expect(ns.post.mock.calls[0][1]).toEqual({ domains: 'example.com,example.net' })
    })
  })

})

