/* eslint-disable no-undef */
const fs = require('fs')
const path = require('path')

const NameSilo = require('../lib/namesilo')
const fixtures = require('./fixtures/all.js')

/**
 * Get sandbox client
 * @returns NameSilo
 */
function getClient (options) {
  let ns = new NameSilo(Object.assign({}, options, {
    apiKey: process.env.NAMESILO_SANDBOX_KEY || 'abc123',
    sandbox: true,
    // debug: true
  }))

  ns.axios.post = jest.fn().mockImplementation(ns.axios.post)
  ns.post = jest.fn().mockImplementation(ns.post)

  return ns
}

function getMockClient (fixture, options) {
  options = options || {}
  options.apiKey = options.apiKey || '123'
  options.sandbox = true
  let ns = new NameSilo(options)
  let inTestSuite = typeof jest !== 'undefined'

  const mockPost = (action, inputs) => {
    return new Promise(async (resolve) => {
      let data = await loadFixture(fixture || action)
      resolve({ data })
    })
  }

  ns.setHTTPClient({
    post: inTestSuite ? jest.fn().mockImplementation(mockPost) : mockPost
  })

  ns.post = inTestSuite ? jest.fn().mockImplementation(ns.post) : ns.post
  return ns
}

async function loadFixture (name) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, `./fixtures/${name}.xml`), 'utf8', (err, data) => {
      if (err) {
        return resolve(fixtures[name] ? fixtures[name].sampleResponse : '')
      }
      resolve(data)
    })
  })
}

module.exports = {
  getClient,
  getMockClient,
  loadFixture
}
