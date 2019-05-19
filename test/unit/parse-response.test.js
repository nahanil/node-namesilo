/* eslint-disable no-undef */
const utils = require('../../lib/utils')
const { loadFixture } = require('./test-util')

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
})
