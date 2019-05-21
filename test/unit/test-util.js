/* eslint-disable no-undef */
const fs = require('fs')
const path = require('path')

const NameSilo = require('../../lib/namesilo')
const fixtures = require('../fixtures/all.js')

function getClient () {
  return new NameSilo({
    apiKey: 'abc123',
    sandbox: true
  })
}

function getMockClient (fixture, options) {
  options = options || {}
  options.apiKey = options.apiKey || '123'
  options.sandbox = true
  let ns = new NameSilo(options)

  ns.setHTTPClient({
    post: jest.fn().mockImplementation((action, inputs) => {
      return new Promise(async (resolve) => {
        let data = await loadFixture(action)
        resolve({ data })
      })
    })
  })

  ns.post = jest.fn().mockImplementation(ns.post)
  return ns
}

async function loadFixture (name) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, `/../fixtures/${name}.xml`), 'utf8', (err, data) => {
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
