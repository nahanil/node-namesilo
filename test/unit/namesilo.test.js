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
    it(`should have ${actions.length} expected dynamically created endpoint methods`, () => {
      let ns = getClient()
      for (let action of actions) {
        expect(typeof ns[action]).toBe('function')
      }
    })

    let action = actions[0]
    it(`should return some useful thing for ${action}`, async () => {
      let ns = getMockClient(('success'))

      // Actually run the thing
      let data = await ns[action]({})
      expect(data.code).toBe(300)
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

  describe(`checkDomainAvailability`, () => {
    it(`should accept an array as input`, async () => {
      let ns = getMockClient('checkRegisterAvailability')
      await ns.checkRegisterAvailability(['example.com', 'example.net'])

      expect(ns.post).toHaveBeenCalledTimes(1)
      expect(ns.post.mock.calls[0][1]).toEqual({ domains: 'example.com,example.net' })
    })

    // it(`should flatten arrays`, async () => {
    //   let ns = getMockClient('checkRegisterAvailability')
    //   let data = await ns.checkRegisterAvailability(['example.com', 'example.net'])

    //   console.log(`checkRegisterAvailability got mock response:`, JSON.stringify(data, null, 4))
    //   expect(ns.post).toHaveBeenCalledTimes(1)
    //   expect(ns.post.mock.calls[0][1]).toEqual({ domains: 'example.com,example.net' })
    // })
  })

})

