/* eslint-disable no-undef */
const fs = require('fs')
const path = require('path')

const NameSilo = require('../../lib/namesilo')
const parseResponse = require('../../lib/parse-response')
const utils = require('../../lib/utils')
const fixtures = require('../fixtures/all.js')

function getClient () {
  return new NameSilo({
    apiKey: 'abc123',
    sandbox: true
  })
}

function getMockClient (fixture) {
  let ns = new NameSilo({ apiKey: '123', sandbox: true })

  let mockPost = async (action, inputs, parser) => {
    let xml = await loadFixture(fixture)
    // console.log('using xml response', xml)
    let response = parseResponse(xml)
    if (utils.isFunction(inputs)) {
      return inputs(response)
    }

    if (utils.isFunction(parser)) {
      return parser(response)
    }
    return response
  }

  if (typeof jest === 'undefined') {
    ns.post = mockPost
    return ns
  } else {
    ns.post = jest.fn().mockImplementation(mockPost)
  }

  return ns
}

async function loadFixture (name) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, `/../fixtures/${name}.xml`), 'utf8', (err, data) => {
      if (err) {
        // return reject(err)
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
