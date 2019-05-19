module.exports = {
  "registerDomain": {
    "params": {
      "domain": "namesilo.com",
      "years": "2",
      "private": "1",
      "auto_renew": "1"
    },
    "description": "Register a Domain",
    "sampleResponse": "<namesilo> <request> <operation>registerDomain</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <message>Your domain registration was successfully processed.</message> <domain>namesilo.com</domain> <order_amount>7.77</order_amount> </reply></namesilo>"
  },
  "registerDomainDrop": {
    "params": {
      "domain": "namesilo.com",
      "years": "2",
      "private": "1",
      "auto_renew": "1"
    },
    "description": "Register a Domain using Drop-Catching",
    "sampleResponse": "<namesilo> <request> <operation>registerDomainDrop</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <message>Your domain registration was successfully processed.</message> <domain>namesilo.com</domain> <order_amount>7.77</order_amount> </reply></namesilo>"
  },
  "renewDomain": {
    "params": {
      "domain": "namesilo.com",
      "years": "2"
    },
    "description": "Renew a Domain",
    "sampleResponse": "<namesilo> <request> <operation>renewDomain</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <message>Your domain renewal was successfully processed.</message> <domain>namesilo.com</domain> <order_amount>7.77</order_amount> </reply></namesilo>"
  },
  "transferDomain": {
    "params": {
      "domain": "namesilo.com",
      "auth": "XXXXX",
      "private": "1",
      "auto_renew": "1"
    },
    "description": "Transfer a Domain",
    "sampleResponse": "<namesilo> <request> <operation>transferDomain</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <message>Your domain transfer was successfully processed.</message> <domain>namesilo.com</domain> <order_amount>7.77</order_amount> </reply></namesilo>"
  },
  "checkTransferStatus": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "Check Transfer Status",
    "sampleResponse": "<namesilo> <request> <operation>checkTransferStatus</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <date>2010-01-01 12:30:59</date> <status>Pending at Registry</status> <message>Your transfer request has been successfully submitted to the central registry.</message> </reply></namesilo>"
  },
  "transferUpdateChangeEPPCode": {
    "params": {
      "domain": "namesilo.com",
      "auth": "12345ABCDE"
    },
    "description": "Transfer Update (Add/Change EPP Code)",
    "sampleResponse": "<namesilo> <request> <operation>transferUpdateChangeEPPCode</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "transferUpdateResendAdminEmail": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "Transfer Update (Re-Send Administrative Email Verification)",
    "sampleResponse": "<namesilo> <request> <operation>transferUpdateResendAdminEmail</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "transferUpdateResubmitToRegistry": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "Transfer Update (Re-Submit a transfer to the registry)",
    "sampleResponse": "<namesilo> <request> <operation>transferUpdateResubmitToRegistry</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "checkRegisterAvailability": {
    "params": {
      "domains": "namesilo.com,namesilo.net,namesilo.org,n#mesilo.com"
    },
    "description": "Check Availability of Domain Registration",
    "sampleResponse": "<namesilo> <request> <operation>checkRegisterAvailability</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <available> <domain price=\"9.99\">namesilo.com</domain> <domain price=\"19.99\">namesilo.org</domain> </available> <unavailable> <domain>namesilo.net</domain> </unavailable> <invalid> <domain>n#mesilo.com</domain> </invalid> </reply></namesilo>"
  },
  "checkTransferAvailability": {
    "params": {
      "domains": "namesilo.com,namesilo.net,namesilo.org,namesilo.asia"
    },
    "description": "Check Availability of Domain Transfer",
    "sampleResponse": "<namesilo> <request> <operation>checkTransferAvailability</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <available> <domain>namesilo.com</domain> <domain>namesilo.org</domain> </available> <unavailable> <domain reason=\"This domain cannot be transferred since it is not currently registered.\">namesilo.net</domain> <domain reason=\"Sorry, we do not currently support the .ASIA extension/TLD\">namesilo.asia</domain> </unavailable> </reply></namesilo>"
  },
  "listDomains": {
    "params": {},
    "description": "List of Active Domains",
    "sampleResponse": "<namesilo> <request> <operation>listDomains</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <domains> <domain>namesilo.com</domain> <domain>namesilo.net</domain> <domain>namesilo.biz</domain> <domain>namesilo.info</domain> <domain>namesilo.mobi</domain> <domain>namesilo.org</domain> </domains> </reply></namesilo>"
  },
  "getDomainInfo": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "Get Domain Information",
    "sampleResponse": "<namesilo> <request> <operation>getDomainInfo</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <created>2009-01-11</created> <expires>2017-01-11</expires> <status>Active</status> <locked>Yes</locked> <private>Yes</private> <auto_renew>Yes</auto_renew> <traffic_type>Forwarded</traffic_type> <email_verification_required>No</email_verification_required> <portfolio>Main Portfolio</portfolio> <forward_url>https://www.namesilo.net</forward_url> <forward_type>Temporary Forward (302)</forward_type> <nameservers> <nameserver position=\"1\">NS1.NAMESILO.COM</nameserver> <nameserver position=\"2\">NS2.NAMESILO.COM</nameserver> </nameservers> <contact_ids> <registrant>444444</registrant> <administrative>555555</administrative> <technical>666666</technical> <billing>7777777</billing> </contact_ids> </reply></namesilo>"
  },
  "contactList": {
    "params": {},
    "description": "View contact profiles",
    "sampleResponse": "<namesilo> <request> <operation>contactList</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <contact> <contact_id>4444444</contact_id> <default_profile>1</default_profile> <nickname>Test 1</nickname> <company>Springfield Power Plant</company> <first_name>Homer</first_name> <last_name>Simpson</last_name> <address>742 Evergreen Terrace</address> <address2/> <city>Springfield</city> <state>ST</state> <zip>55555</zip> <country>US</country> <email>homer @simpsons.com</email> <phone>999-555-1212</phone> <fax>555-123-4567</fax> <usnc>C21</usnc> <usap>P2</usap> <calf>CCT</calf> <caln>en</caln> <caag>2.0</caag> <cawd>1</cawd> </contact> <contact> <contact_id>5555555</contact_id> <default_profile>0</default_profile> <nickname>Test 2</nickname> <company>NameSilo</company> <first_name>John</first_name> <last_name>Smith</last_name> <address>555 N. 1st Street</address> <address2>Suite 500</address2> <city>Anywhere</city> <state>AZ</state> <zip>12345</zip> <country>US</country> <email>test @test.com</email> <phone>480-555-1212</phone> <fax>888-777-6666</fax> <usnc/> <usap/> <calf/> <caln/> <caag/> <cawd/> </contact> </reply></namesilo>"
  },
  "contactAdd": {
    "params": {
      "fn": "John",
      "ln": "Smith",
      "ad": "123 N. 1st Street",
      "cy": "Anywhere",
      "st": "AZ",
      "zp": "55555",
      "ct": "US",
      "em": "test@test.com",
      "ph": "4805555555"
    },
    "description": "Add a contact profile",
    "sampleResponse": "<namesilo> <request> <operation>contactAdd</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <contact_id>55555</contact_id> </reply></namesilo>"
  },
  "contactUpdate": {
    "params": {
      "contact_id": "111111",
      "fn": "John",
      "ln": "Smith",
      "ad": "123 N. 1st Street",
      "cy": "Anywhere",
      "st": "AZ",
      "zp": "55555",
      "ct": "US",
      "em": "test@test.com",
      "ph": "4805555555"
    },
    "description": "Update a contact profile",
    "sampleResponse": "<namesilo> <request> <operation>contactUpdate</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "contactDelete": {
    "params": {
      "contact_id": "111111"
    },
    "description": "Delete a contact profile",
    "sampleResponse": "<namesilo> <request> <operation>contactUpdate</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "contactDomainAssociate": {
    "params": {
      "domain": "namesilo.com",
      "administrative": "11111",
      "technical": "222222"
    },
    "description": "Associate a contact profile with a domain",
    "sampleResponse": "<namesilo> <request> <operation>contactDomainAssociate</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "changeNameServers": {
    "params": {
      "domain": "namesilo.com",
      "ns1": "NS1.NAMESILO.COM",
      "ns2": "NS2.NAMESILO.COM"
    },
    "description": "Change NameServers",
    "sampleResponse": "<namesilo> <request> <operation>changeNameServers</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "dnsSecListRecords": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "List Current DS (DNSSEC) Records",
    "sampleResponse": "<namesilo> <request> <operation>dnsSecListRecords</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <ds_record> <digest>123456789ABCDEFGHIJ</digest> <digest_type>1</digest_type> <algorithm>5</algorithm> <key_tag>1234</key_tag> </ds_record> <ds_record> <digest>123456789ABCDEFGHIJ</digest> <digest_type>2</digest_type> <algorithm>3</algorithm> <key_tag>9876</key_tag> </ds_record> </reply></namesilo>"
  },
  "dnsSecAddRecord": {
    "params": {
      "domain": "namesilo.com",
      "digest": "123456789",
      "keyTag": "123",
      "digestType": "1",
      "alg": "5"
    },
    "description": "Add a DS record (DNSSEC) to your domain",
    "sampleResponse": "<namesilo> <request> <operation>dnsSecAddRecord</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "dnsSecDeleteRecord": {
    "params": {
      "domain": "namesilo.com",
      "digest": "123456789",
      "keyTag": "123",
      "digestType": "1",
      "alg": "5"
    },
    "description": "Delete a DS record (DNSSEC) from your domain",
    "sampleResponse": "<namesilo> <request> <operation>dnsSecDeleteRecord</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "dnsListRecords": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "List Current DNS Records",
    "sampleResponse": "<namesilo> <request> <operation>dnsListRecords</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <resource_record> <record_id>1a2b3c4d5e6f</record_id> <type>A</type> <host>test.namesilo.com</host> <value>55.555.55.55</value> <ttl>7207</ttl> <distance>0</distance> </resource_record> <resource_record> <record_id>5Brg5hw25jr</record_id> <type>CNAME</type> <host>dev.namesilo.com</host> <value>testing.namesilo.com</value> <ttl>7207</ttl> <distance>0</distance> </resource_record> <resource_record> <record_id>fH35aH4hsv</record_id> <type>MX</type> <host>namesilo.com</host> <value>mail.namesilo.com</value> <ttl>7207</ttl> <distance>10</distance> </resource_record> <resource_record> <record_id>Ldfd26Sfbh</record_id> <type>MX</type> <host>namesilo.com</host> <value>mail2.namesilo.com</value> <ttl>7207</ttl> <distance>20</distance> </resource_record> </reply></namesilo>"
  },
  "dnsAddRecord": {
    "params": {
      "domain": "namesilo.com",
      "rrtype": "A",
      "rrhost": "test",
      "rrvalue": "55.55.55.55",
      "rrttl": "7207"
    },
    "description": "Add DNS Records",
    "sampleResponse": "<namesilo> <request> <operation>dnsAddRecord</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <record_id>1a2b3c4d5e</record_id> </reply></namesilo>"
  },
  "dnsUpdateRecord": {
    "params": {
      "domain": "namesilo.com",
      "rrid": "1a2b3",
      "rrhost": "test",
      "rrvalue": "55.55.55.55",
      "rrttl": "7207"
    },
    "description": "Update DNS Records",
    "sampleResponse": "<namesilo> <request> <operation>dnsUpdateRecord</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <record_id>1a2b3c4d5e</record_id> </reply></namesilo>"
  },
  "dnsDeleteRecord": {
    "params": {
      "domain": "namesilo.com",
      "rrid": "1a2b3"
    },
    "description": "Delete DNS Records",
    "sampleResponse": "<namesilo> <request> <operation>dnsDeleteRecord</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "portfolioList": {
    "params": {},
    "description": "View active portfolios",
    "sampleResponse": "<namesilo> <request> <operation>portfolioList</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <portfolios> <name>Personal domains</name> <name>Business domains</name> </portfolios> </reply></namesilo>"
  },
  "portfolioAdd": {
    "params": {
      "portfolio": "New Portfolio"
    },
    "description": "Add a portfolio",
    "sampleResponse": "<namesilo> <request> <operation>portfolioAdd</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "portfolioDelete": {
    "params": {
      "portfolio": "New Portfolio"
    },
    "description": "Delete a portfolio",
    "sampleResponse": "<namesilo> <request> <operation>portfolioDelete</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "portfolioDomainAssociate": {
    "params": {
      "portfolio": "New Portfolio",
      "domains": "namesilo.com,namesilo.net,namesilo.info"
    },
    "description": "Assign a domain to a portfolio",
    "sampleResponse": "<namesilo> <request> <operation>portfolioDomainAssociate</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <message>All supplied domains belonging to your account have been updated.</message> </reply></namesilo>"
  },
  "listRegisteredNameServers": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "List Registered NameServers",
    "sampleResponse": "<namesilo> <request> <operation>listRegisteredNameServers</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <hosts> <host>ns1</host> <ip>123.456.78.9</ip> <ip>11.22.33.44</ip> </hosts> <hosts> <host>ns2</host> <ip>99.88.77.6</ip> </hosts> </reply></namesilo>"
  },
  "addRegisteredNameServer": {
    "params": {
      "domain": "namesilo.com",
      "new_host": "ns5",
      "ip1": "123.45.67.8",
      "ip2": "11.22.33.44"
    },
    "description": "Add a Registered NameServer",
    "sampleResponse": "<namesilo> <request> <operation>addRegisteredNameServer</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "modifyRegisteredNameServer": {
    "params": {
      "domain": "namesilo.com",
      " current_host": "ns5",
      "new_host": "ns5",
      "ip1": "123.45.67.8",
      "ip2": "11.22.33.44"
    },
    "description": "Modify a Registered NameServer",
    "sampleResponse": "<namesilo> <request> <operation>modifyRegisteredNameServer</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "deleteRegisteredNameServer": {
    "params": {
      "domain": "namesilo.com",
      " current_host": "ns5"
    },
    "description": "Delete a Registered NameServer",
    "sampleResponse": "<namesilo> <request> <operation>deleteRegisteredNameServer</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "addPrivacy": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "Add WHOIS Privacy",
    "sampleResponse": "<namesilo> <request> <operation>addPrivacy</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "removePrivacy": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "Remove WHOIS Privacy",
    "sampleResponse": "<namesilo> <request> <operation>removePrivacy</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "addAutoRenewal": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "Add Auto-Renewal",
    "sampleResponse": "<namesilo> <request> <operation>addAutoRenewal</operation> <ip>55.555.55.55</ip> </request> <reply> <code>250</code> <detail>Domain is already set to AutoRenew - No update made.</detail> </reply></namesilo>"
  },
  "removeAutoRenewal": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "Remove Auto-Renewal",
    "sampleResponse": "<namesilo> <request> <operation>removeAutoRenewal</operation> <ip>55.555.55.55</ip> </request> <reply> <code>251</code> <detail>Domain is already set not to AutoRenew - No update made.</detail> </reply></namesilo>"
  },
  "retrieveAuthCode": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "Retrieve EPP Code",
    "sampleResponse": "<namesilo> <request> <operation>retrieveAuthCode</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>Success</detail> </reply></namesilo>"
  },
  "domainForward": {
    "params": {
      "domain": "namesilo.com",
      "protocol": "http",
      "address": "google.com",
      "method": "302"
    },
    "description": "Forward a Domain",
    "sampleResponse": "<namesilo> <request> <operation>domainForward</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "domainForwardSubDomain": {
    "params": {
      "domain": "namesilo.com",
      "sub_domain": "test",
      "protocol": "http",
      "address": "google.com",
      "method": "302"
    },
    "description": "Forward a Sub-Domain",
    "sampleResponse": "<namesilo> <request> <operation>domainForwardSubDomain</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <message>The sub-domain has been successfully (created OR modified)</message> </reply></namesilo>"
  },
  "domainForwardSubDomainDelete": {
    "params": {
      "domain": "namesilo.com",
      "sub_domain": "test"
    },
    "description": "Delete a Sub-Domain Forward",
    "sampleResponse": "<namesilo> <request> <operation>domainForwardSubDomainDelete</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "domainLock": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "Lock a Domain",
    "sampleResponse": "<namesilo> <request> <operation>domainLock</operation> <ip>55.555.55.55</ip> </request> <reply> <code>252</code> <detail>Domain is already Locked - No update made.</detail> </reply></namesilo>"
  },
  "domainUnlock": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "Unlock a Domain",
    "sampleResponse": "<namesilo> <request> <operation>domainUnlock</operation> <ip>55.555.55.55</ip> </request> <reply> <code>253</code> <detail>Domain is already Unlocked - No update made.</detail> </reply></namesilo>"
  },
  "listEmailForwards": {
    "params": {
      "domain": "namesilo.com"
    },
    "description": "View the email forwards for your domain",
    "sampleResponse": "<namesilo> <request> <operation>listEmailForwards</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <addresses> <email>test@namesilo.com</email> <forwards_to>test@test.com</forwards_to> <forwards_to>test2@test.com</forwards_to> </addresses> <addresses> <email>testing@namesilo.com</email> <forwards_to>test@test.com</forwards_to> </addresses> </reply></namesilo>"
  },
  "configureEmailForward": {
    "params": {
      "domain": "namesilo.com",
      "email": "test",
      "forward1": "test@test.com",
      "forward2": "test2@test.com"
    },
    "description": "Add or modify an email forward for your domain",
    "sampleResponse": "<namesilo> <request> <operation>configureEmailForward</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <message>test@namesilo.com has been successfully (\"created\" or \"changed\") </message> </reply></namesilo>"
  },
  "deleteEmailForward": {
    "params": {
      "domain": "namesilo.com",
      "email": "test"
    },
    "description": "Delete an email forward for your domain",
    "sampleResponse": "<namesilo> <request> <operation>deleteEmailForward</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <message>test@namesilo.com has been deleted</message> </reply></namesilo>"
  },
  "registrantVerificationStatus": {
    "params": {},
    "description": "View the verification status of any Registrant email addresses",
    "sampleResponse": "<namesilo> <request> <operation>registrantVerificationStatus</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <email> <email_address>test@sample.com</email_address> <domains>32</domains> <verified>Yes</verified> </email> <email> <email_address>anothertest@sample.com</email_address> <domains>12</domains> <verified>No</verified> </email> </reply></namesilo>"
  },
  "emailVerification": {
    "params": {
      "email": "test@example.com"
    },
    "description": "Verify a Registrant email address",
    "sampleResponse": "<namesilo> <request> <operation>emailVerification</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <message>The verification email has been sent</message> </reply></namesilo>"
  },
  "getAccountBalance": {
    "params": {},
    "description": "View NameSilo Account Funds Balance",
    "sampleResponse": "<namesilo> <request> <operation>getAccountBalance</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <balance>355.75</balance> </reply></namesilo>"
  },
  "addAccountFunds": {
    "params": {
      "amount": "65.43",
      "payment_id": "123"
    },
    "description": "Add NameSilo Account Funds",
    "sampleResponse": "<namesilo> <request> <operation>addAccountFunds</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <new_balance>420.61</new_balance> </reply></namesilo>"
  },
  "marketplaceActiveSalesOverview": {
    "params": {},
    "description": "View all of your active Marketplace sales",
    "sampleResponse": "<namesilo> <request> <operation>marketplaceActiveSalesOverview</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <sale_details> <domain>example.com</domain> <status>active</status> <reserve>0.00</reserve> <buy_now>0.00</buy_now> <portfolio>none</portfolio> <sale_type>Offer/Counter</sale_type> <pay_plan_offered>No</pay_plan_offered> <end_date>2018-12-24 00:00:00</end_date> <auto_extend_days>0</auto_extend_days> <time_remaining>1 year</time_remaining> <private>No</private> <active_bid_or_offer>no</active_bid_or_offer> </sale_details> <sale_details> <domain>example2.com</domain> <status>awaiting payment</status> <reserve>25.00 (hidden)</reserve> <buy_now>150.00</buy_now> <portfolio>For Sale Domains</portfolio> <sale_type>Auction</sale_type> <pay_plan_offered>Yes</pay_plan_offered> <end_date>2018-11-21 21:21:21</end_date> <auto_extend_days>15</auto_extend_days> <time_remaining>13 days</time_remaining> <private>Yes</private> <active_bid_or_offer>yes</active_bid_or_offer> </sale_details> </reply></namesilo>"
  },
  "marketplaceAddOrModifySale": {
    "params": {
      "domain": "example.com",
      "action": "add",
      "sale_type": "auction",
      "reserve": "250.00",
      "buy_now": "750.00",
      "payment_plan_offered": "1"
    },
    "description": "Allows you to add a new Marketplace sale or modify and existing sale",
    "sampleResponse": "<namesilo> <request> <operation>marketplaceAddOrModifySale</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <message>Your selected domains have been added to our marketplace!</message> </reply></namesilo>"
  },
  "marketplaceLandingPageUpdate": {
    "params": {
      "domain": "example.com",
      "mp_template": "2",
      "mp_bgcolor": "000000"
    },
    "description": "Allows you to update the appearance of your Marketplace Landing Page",
    "sampleResponse": "<namesilo> <request> <operation>marketplaceLandingPageUpdate</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> </reply></namesilo>"
  },
  "getPrices": {
    "params": {},
    "description": "Return our price list",
    "sampleResponse": "<namesilo> <request> <operation>getPrices</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <com> <registration>8.99</registration> <transfer>8.39</transfer> <renew>8.99</renew> </com> <net> <registration>9.29</registration> <transfer>8.99</transfer> <renew>9.29</renew> </net> </reply></namesilo>"
  },
  "listOrders": {
    "params": {},
    "description": "Returns Complete Account Order History",
    "sampleResponse": "<namesilo> <request> <operation>listOrders</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <order> <order_number>77777</order_number> <order_date>2016-12-24 12:12:12</order_date> <method>Bitcoin</method> <total>26.97</total> </order> <order> <order_number>888888</order_number> <order_date>2016-12-24 13:14:15</order_date> <method>PayPal</method> <total>8.99</total> </order> </reply></namesilo>"
  },
  "orderDetails": {
    "params": {
      "order_number": "77777"
    },
    "description": "View Details For Provided Order Number",
    "sampleResponse": "<namesilo> <request> <operation>orderDetails</operation> <ip>55.555.55.55</ip> </request> <reply> <code>300</code> <detail>success</detail> <order_date>2016-12-24 12:12:12</order_date> <method>Bitcoin</method> <total>26.97</total> <order_details> <description>testdomain.com - registration</description> <years_qty>2</years_qty> <price>8.99</price> <subtotal>17.98</subtotal> <status>Processed</status> </order_details> <order_details> <description>testdomain2.com - renewal</description> <years_qty>1</years_qty> <price>8.99</price> <subtotal>8.99</subtotal> <status>Credited</status> <credited_date>2016-12-25 09:09:09</credited_date> <credited_amount>8.99</credited_amount> </order_details> </reply></namesilo>"
  }
}
