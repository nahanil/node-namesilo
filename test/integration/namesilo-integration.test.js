/* eslint-disable no-undef */
const { getClient } = require('../test-util')
const utils = require('../../lib/utils')
const uuid = require('uuid/v4')

const JEST_TIMEOUT = 10000

describe('Integration Tests', () => {
  it ('should connect to sandbox API', async () => {
    let data = await getClient().listDomains()
    expect(data.success).toBe(true)
    return
  }, JEST_TIMEOUT)

  it('should accept a request logger function', async () => {
    let logger = jest.fn()
    await getClient({ logger }).listDomains()
    expect(logger).toHaveBeenCalledTimes(1)
  }, JEST_TIMEOUT)

  it('should retrieve a list of domains', async () => {
    let data = await getClient().listDomains()

    expect(data.success).toBe(true)
    expect(utils.isArray(data.domains))
    return
  }, JEST_TIMEOUT)

  it('should check domain availability', async () => {
    let check = uuid() + '.xyz'
    let data = await getClient().checkRegisterAvailability(check)

    expect(data.success).toBe(true)
    expect(utils.isArray(data.available)).toBe(true)
  }, JEST_TIMEOUT)

  it('should retrieve a list of domain prices', async () => {
    let data = await getClient().getPrices()

    expect(data.success).toBe(true)
    expect(utils.isObject(data.com))
    expect(utils.isNumber(data.com.registration))
  }, JEST_TIMEOUT)

  describe('Manage a domain', () => {
    // const domain = process.env.NAMESILO_TEST_DOMAIN || uuid() + '.xyz'
    const domain = 'node-namesilo.com'

    xit(`should be able to register a domain (${domain})`, async () => {
      let data = await getClient().registerDomain(domain, 10)
      expect(data.success).toBe(true)
      expect(utils.isString(data.domain)).toBe(true)
      expect(utils.isNumber(data.order_amount)).toBe(true)
    }, JEST_TIMEOUT)

    it(`should not allow single name server (${domain})`, async () => {
      let data = await getClient().changeNameServers(domain, ['ns1.example.net'])
      expect(data.success).toBe(false)
    }, JEST_TIMEOUT)

    xit(`should be able to change name servers (${domain})`, async () => {
      let data = await getClient().changeNameServers(domain, ['ns1.example.net', 'ns2.example.net'])
      console.log('Got response', data)
      expect(data.success).toBe(true)
    }, JEST_TIMEOUT)

    xit(`should be able to renew domain`, async () => {
      let data = await getClient().renewDomain(domain, 1)
      expect(data.success).toBe(true)
      expect(utils.isString(data.domain)).toBe(true)
      expect(utils.isNumber(data.order_amount)).toBe(true)
    }, JEST_TIMEOUT)

    it(`should list domain info (${domain})`, async () => {
      let data = await getClient().getDomainInfo(domain)

      expect(data.success).toBe(true)
      expect(utils.isString(data.created)).toBe(true)
      expect(utils.isArray(data.nameservers)).toBe(true)
    }, JEST_TIMEOUT)

  })

  it('should ...', async () => {
    return
  }, JEST_TIMEOUT)
})
