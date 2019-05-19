const NameSilo = require('./index')

async function run() {
  const ns = new NameSilo({ sandbox: true, apiKey: 'a36d84bc34dd5cb66b13', debug: true });
//  let res = await ns.listDomains()
  //let res = await ns.renewDomain({ domain: 'flangehater.net', years: 1})
  //let res = await ns.domainInfo('flangehater.net')
  //let res = await ns.listEmailForwards({ domain: 'flangehater.net' })
  //let res = await ns.configureEmailForward({ domain: 'flangehater.net', email: 'bar', forward1: 'foo@example.com' })
  let res = await ns.getAccountBalance()
  //let res = await ns.getPrices()
  //let res = await ns.listOrders()
  //let res = await ns.orderDetails({ order_number: 63968 })

  //let res = await ns.listRegisteredNameServers({ domain: 'flangehater.net' })
  //let res = await ns.addRegisteredNameServer({ domain: 'flangehater.net', new_host: 'foo', ip1: '202.45.125.125', ip2: '2606:4700:4700::1111' })
  //let res = await ns.addRegisteredNameServer({ domain: 'flangehater.net', new_host: 'bar', ip1: '202.45.125.125' })
  //let res = await ns.checkTransferAvailability({ domains: 'flangehater.net,google.com,texh.net,linahan.id.au' })
  //let res = await ns.checkRegisterAvailability({ domains: 'flangehater.net,google.com,texh.net,linahan.id.au,fofohahahaha3r.com' })
    .catch((err) => {
      console.log('Failed to list domains:', JSON.stringify(err))
    })
  console.log('Userland response: ', JSON.stringify(res, null, 4))
}

run();
