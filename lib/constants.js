module.exports.actions = {
  registerDomain: null,
  registerDomainDrop: null,
  // renewDomain: null,
  transferDomain: null,
  checkTransferStatus: {
    singleParam: 'domain'
  },
  transferUpdateChangeEPPCode: null,
  transferUpdateResendAdminEmail: {
    singleParam: 'domain'
  },
  transferUpdateResubmitToRegistry: {
    singleParam: 'domain'
  },
  // checkRegisterAvailability: null,
  checkTransferAvailability: {
    singleParam: 'domains',
    flattenArrays: ['domains']
  },
  // listDomains: null,
  getDomainInfo: {
    singleParam: 'domain'
  },
  contactList: null,
  contactAdd: null,
  contactUpdate: null,
  contactDelete: {
    singleParam: 'contact_id'
  },
  contactDomainAssociate: null,
  // changeNameServers: null,
  dnsListRecords: {
    singleParam: 'domain'
  },
  dnsAddRecord: null,
  dnsUpdateRecord: null,
  dnsDeleteRecord: null,
  dnsSecListRecords: {
    singleParam: 'domain'
  },
  dnsSecAddRecord: null,
  dnsSecDeleteRecord: null,
  portfolioList: null,
  portfolioAdd: {
    singleParam: 'portfolio'
  },
  portfolioDelete: {
    singleParam: 'portfolio'
  },
  portfolioDomainAssociate: null,
  listRegisteredNameServers: {
    singleParam: 'domain'
  },
  addRegisteredNameServer: null,
  modifyRegisteredNameServer: null,
  deleteRegisteredNameServer: null,
  addPrivacy: {
    singleParam: 'domain'
  },
  removePrivacy: {
    singleParam: 'domain'
  },
  addAutoRenewal: {
    singleParam: 'domain'
  },
  removeAutoRenewal: {
    singleParam: 'domain'
  },
  retrieveAuthCode: {
    singleParam: 'domain'
  },
  domainForward: null,
  domainForwardSubDomain: null,
  domainForwardSubDomainDelete: null,
  domainLock: {
    singleParam: 'domain'
  },
  domainUnlock: {
    singleParam: 'domain'
  },
  listEmailForwards: {
    singleParam: 'domain'
  },
  configureEmailForward: null,
  deleteEmailForward: null,
  registrantVerificationStatus: null,
  emailVerification: {
    singleParam: 'email'
  },
  getAccountBalance: null,
  addAccountFunds: null,
  marketplaceActiveSalesOverview: null,
  marketplaceAddOrModifySale: null,
  marketplaceLandingPageUpdate: null,
  getPrices: null,
  listOrders: null,
  orderDetails: {
    singleParam: 'order_number'
  }
}
