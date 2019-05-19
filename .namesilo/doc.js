const fs = require('fs')
const path = require('path')
const { actions } = require('../lib/constants')
const fixtures = require('../test/fixtures/all')
const { getMockClient } = require('../test/unit/test-util')

async function go() {
let out = ''
for (let action of actions) {
  let params = fixtures[action] && fixtures[action].params ? fixtures[action].params : null
  let strParams = params ? JSON.stringify(params, null, 2).replace(/"/g, "'").replace(/^/gm, ' * ').replace(' *', '').trim() : ''
  let jsdocParams = ''

  if (params) {
    jsdocParams = `\n * @param {Object} options\n`
    for (let key of Object.keys(params)) {
      jsdocParams += ` * @param {*} options.${key}\n`
    }
  }

  let ns = getMockClient(action)
  let exampleOut = JSON.stringify(await ns[action](params), null, 2).replace(/"/g, "'").replace(/^/gm, ' * ').replace(' *', '').trim()

out += `
/**
 * [AUTO] ${fixtures[action].description}
 * See: https://www.namesilo.com/api_reference.php#${action}
 * ${jsdocParams}
 * @memberof NameSilo
 * @see https://www.namesilo.com/api_reference.php#${action}
 * @example
 * let res = ns.${action}(${strParams})
 * @example
 * // Output
 * ${exampleOut}
 */

 function ${action}(${jsdocParams ? 'options' : ''}) {}
`;

}

fs.writeFile(path.join(__dirname, '../lib/xx_autogen.js'), out, (err) => {
  if (err) {
    return console.error(`Unable to write file`)
  }
})
}
go()
