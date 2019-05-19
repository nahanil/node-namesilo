const parser = require('xml2json')
const utils = require('./utils')

function parseNameSiloResponse(xml, options) {
  let data = parser.toJson(xml, {
    object: true,
    coerce: true,
    arrayNotation: false
  });

  if (!data.namesilo || !data.namesilo.reply) {
    throw new Error(`Unable to parse given input`)
  }

  // Flatten response?
  let reply = flattenReply(data.namesilo.reply)

  return reply
}

function flattenReply(reply) {
  // Tidy nameserver response to an array - ie, ['ns1.foo.com', 'ns2.foo.com']
  if (reply.nameservers && reply.nameservers.nameserver && utils.isArray(reply.nameservers.nameserver)) {
    reply.nameservers = reply.nameservers.nameserver.map(ns => ns['$t'])
  }

  // Always return an array for 'hosts' in listRegisteredNameServers
  if (reply.hosts && utils.isArray(reply.hosts)) {
    reply.hosts = reply.hosts.map(h => {
      if (h.ip && !utils.isArray(h.ip)) {
        h.ip = [h.ip]
      }
      return h
    })
  }

  return reply
}

module.exports = parseNameSiloResponse
