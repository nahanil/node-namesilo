/* eslint-disable no-undef */
const utils = require('../../lib/utils')
const { loadFixture } = require('../test-util')

const parseResponse = require('../../lib/parse-response')

describe('Mock response loader', () => {
  it('should be able to load a known fixture', async () => {
    let xml = await loadFixture('listDomains')
    expect(xml).toMatch(/<namesilo>/)
  })
})

describe('XML Response Parser', () => {
  it('should be a functions', () => {
    expect(typeof parseResponse).toEqual('function')
  })

  it('should parse a known input', async () => {
    let xml = await loadFixture('listDomains')
    let data = parseResponse(xml)

    expect(utils.isObject(data)).toBe(true)
    expect(data.code).toBe(300)
    expect(data.detail).toBe('success')
  })

  it('should return error response if given invalid XML', () => {
    let data = parseResponse('{this: "is not xml"}')
    expect(data.code).toBe(-1)
  })

  it('should return error response if no namesilo reply exists', () => {
    let data = parseResponse('<namesilo></namesilo>')
    expect(data.code).toBe(-1)
  })

  it('should flatten "hosts" array (listRegisteredNameServers)', async () => {
    let xml = await loadFixture('listRegisteredNameServers')
    let data = parseResponse(xml)

    expect(utils.isObject(data)).toBe(true)
    expect(data.code).toBe(300)
    expect(data.detail).toBe('success')
    expect(utils.isArray(data.hosts)).toBe(true)

    let ex = data.hosts[0]
    expect(utils.isString(ex.host)).toBe(true)
    expect(utils.isArray(ex.ip)).toBe(true)
    expect(utils.isString(ex.ip[0])).toBe(true)
  })
})
