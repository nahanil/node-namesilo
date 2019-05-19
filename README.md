# @nahanil/namesilo *0.0.1*

> Interact with the NameSilo API


### lib/namesilo.js


#### new NameSilo(options) 

Interact with the NameSilo API
You can pass either an API Key as the only parameter, or an object with more verbose configuration options.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `String` `Object`  | (String) API Key | (Object) Configuration options | &nbsp; |
| options.apiKey | `Boolean`  | API Key | &nbsp; |
| options.sandbox&#x3D;false | `Boolean`  | Use sandbox/testing API | *Optional* |
| options.logger | `Function`  |  | *Optional* |




##### Examples

```javascript
const API_KEY = '1234567890'

NameSilo = require('namesilo')
ns = new NameSilo(API_KEY)
```
```javascript
// With sandbox/test mode enabled
ns = new NameSilo({
  apiKey: API_KEY,
  sandbox: true
})
```


##### Returns


- `Void`



#### listDomains() 

Get a list of all active domains within your account.






##### Examples

```javascript
let res = ns.listDomains()
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'domains': [
    'namesilo.com',
    'namesilo.net',
    'namesilo.org'
  ]
}
```


##### Returns


- `Promise`  API Reply



#### checkRegisterAvailability(domains) 

Determine if you can register the specified domains.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| domains | `Array` `String`  | Domain(s) to check | &nbsp; |




##### Examples

```javascript
let res = await ns.checkRegisterAvailability('namesilo.com')
```
```javascript
let res = await ns.checkRegisterAvailability('namesilo.com,namesilo.net,n#mesilo.org')
```
```javascript
let res = await ns.checkRegisterAvailability(['namesilo.com' , 'namesilo.net' , 'n#mesilo.org'])
```
```javascript
// Output
{
  "code": 300,
  "detail": "success",
  "available": [
      {
          "price": 9.99,
          "domain": "namesilo.com"
      }
  ],
  "unavailable": [
      "namesilo.net"
  ],
  "invalid": [
      "n#mesilo.com"
  ]
}
```


##### Returns


- `Promise`  API Reply




### lib/xx_autogen.js


#### registerDomain(options) 

[AUTO] Register a Domain
See: https://www.namesilo.com/api_reference.php#registerDomain




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.years |  |  | &nbsp; |
| options.private |  |  | &nbsp; |
| options.auto_renew |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.registerDomain({
  'domain': 'namesilo.com',
  'years': '2',
  'private': '1',
  'auto_renew': '1'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'message': 'Your domain registration was successfully processed.',
  'domain': 'namesilo.com',
  'order_amount': 7.77
}
```


##### Returns


- `Void`



#### registerDomainDrop(options) 

[AUTO] Register a Domain using Drop-Catching
See: https://www.namesilo.com/api_reference.php#registerDomainDrop




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.years |  |  | &nbsp; |
| options.private |  |  | &nbsp; |
| options.auto_renew |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.registerDomainDrop({
  'domain': 'namesilo.com',
  'years': '2',
  'private': '1',
  'auto_renew': '1'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'message': 'Your domain registration was successfully processed.',
  'domain': 'namesilo.com',
  'order_amount': 7.77
}
```


##### Returns


- `Void`



#### renewDomain(options) 

[AUTO] Renew a Domain
See: https://www.namesilo.com/api_reference.php#renewDomain




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.years |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.renewDomain({
  'domain': 'namesilo.com',
  'years': '2'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'message': 'Your domain renewal was successfully processed.',
  'domain': 'namesilo.com',
  'order_amount': 7.77
}
```


##### Returns


- `Void`



#### transferDomain(options) 

[AUTO] Transfer a Domain
See: https://www.namesilo.com/api_reference.php#transferDomain




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.auth |  |  | &nbsp; |
| options.private |  |  | &nbsp; |
| options.auto_renew |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.transferDomain({
  'domain': 'namesilo.com',
  'auth': 'XXXXX',
  'private': '1',
  'auto_renew': '1'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'message': 'Your domain transfer was successfully processed.',
  'domain': 'namesilo.com',
  'order_amount': 7.77
}
```


##### Returns


- `Void`



#### checkTransferStatus(options) 

[AUTO] Check Transfer Status
See: https://www.namesilo.com/api_reference.php#checkTransferStatus




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.checkTransferStatus({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'date': '2010-01-01 12:30:59',
  'status': 'Pending at Registry',
  'message': 'Your transfer request has been successfully submitted to the central registry.'
}
```


##### Returns


- `Void`



#### transferUpdateChangeEPPCode(options) 

[AUTO] Transfer Update (Add/Change EPP Code)
See: https://www.namesilo.com/api_reference.php#transferUpdateChangeEPPCode




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.auth |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.transferUpdateChangeEPPCode({
  'domain': 'namesilo.com',
  'auth': '12345ABCDE'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### transferUpdateResendAdminEmail(options) 

[AUTO] Transfer Update (Re-Send Administrative Email Verification)
See: https://www.namesilo.com/api_reference.php#transferUpdateResendAdminEmail




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.transferUpdateResendAdminEmail({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### transferUpdateResubmitToRegistry(options) 

[AUTO] Transfer Update (Re-Submit a transfer to the registry)
See: https://www.namesilo.com/api_reference.php#transferUpdateResubmitToRegistry




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.transferUpdateResubmitToRegistry({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### checkTransferAvailability(options) 

[AUTO] Check Availability of Domain Transfer
See: https://www.namesilo.com/api_reference.php#checkTransferAvailability




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domains |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.checkTransferAvailability({
  'domains': 'namesilo.com,namesilo.net,namesilo.org,namesilo.asia'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'available': {
    'domain': [
      'namesilo.com',
      'namesilo.org'
    ]
  },
  'unavailable': {
    'domain': [
      {
        'reason': 'This domain cannot be transferred since it is not currently registered.',
        '$t': 'namesilo.net'
      },
      {
        'reason': 'Sorry, we do not currently support the .ASIA extension/TLD',
        '$t': 'namesilo.asia'
      }
    ]
  }
}
```


##### Returns


- `Void`



#### getDomainInfo(options) 

[AUTO] Get Domain Information
See: https://www.namesilo.com/api_reference.php#getDomainInfo




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.getDomainInfo({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'created': '2009-01-11',
  'expires': '2017-01-11',
  'status': 'Active',
  'locked': 'Yes',
  'private': 'Yes',
  'auto_renew': 'Yes',
  'traffic_type': 'Forwarded',
  'email_verification_required': 'No',
  'portfolio': 'Main Portfolio',
  'forward_url': 'https://www.namesilo.net',
  'forward_type': 'Temporary Forward (302)',
  'nameservers': [
    'NS1.NAMESILO.COM',
    'NS2.NAMESILO.COM'
  ],
  'contact_ids': {
    'registrant': 444444,
    'administrative': 555555,
    'technical': 666666,
    'billing': 7777777
  }
}
```


##### Returns


- `Void`



#### contactList(options) 

[AUTO] View contact profiles
See: https://www.namesilo.com/api_reference.php#contactList




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |




##### Examples

```javascript
let res = ns.contactList({})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'contact': [
    {
      'contact_id': 4444444,
      'default_profile': 1,
      'nickname': 'Test 1',
      'company': 'Springfield Power Plant',
      'first_name': 'Homer',
      'last_name': 'Simpson',
      'address': '742 Evergreen Terrace',
      'address2': {},
      'city': 'Springfield',
      'state': 'ST',
      'zip': 55555,
      'country': 'US',
      'email': 'homer @simpsons.com',
      'phone': '999-555-1212',
      'fax': '555-123-4567',
      'usnc': 'C21',
      'usap': 'P2',
      'calf': 'CCT',
      'caln': 'en',
      'caag': 2,
      'cawd': 1
    },
    {
      'contact_id': 5555555,
      'default_profile': 0,
      'nickname': 'Test 2',
      'company': 'NameSilo',
      'first_name': 'John',
      'last_name': 'Smith',
      'address': '555 N. 1st Street',
      'address2': 'Suite 500',
      'city': 'Anywhere',
      'state': 'AZ',
      'zip': 12345,
      'country': 'US',
      'email': 'test @test.com',
      'phone': '480-555-1212',
      'fax': '888-777-6666',
      'usnc': {},
      'usap': {},
      'calf': {},
      'caln': {},
      'caag': {},
      'cawd': {}
    }
  ]
}
```


##### Returns


- `Void`



#### contactAdd(options) 

[AUTO] Add a contact profile
See: https://www.namesilo.com/api_reference.php#contactAdd




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.fn |  |  | &nbsp; |
| options.ln |  |  | &nbsp; |
| options.ad |  |  | &nbsp; |
| options.cy |  |  | &nbsp; |
| options.st |  |  | &nbsp; |
| options.zp |  |  | &nbsp; |
| options.ct |  |  | &nbsp; |
| options.em |  |  | &nbsp; |
| options.ph |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.contactAdd({
  'fn': 'John',
  'ln': 'Smith',
  'ad': '123 N. 1st Street',
  'cy': 'Anywhere',
  'st': 'AZ',
  'zp': '55555',
  'ct': 'US',
  'em': 'test@test.com',
  'ph': '4805555555'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'contact_id': 55555
}
```


##### Returns


- `Void`



#### contactUpdate(options) 

[AUTO] Update a contact profile
See: https://www.namesilo.com/api_reference.php#contactUpdate




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.contact_id |  |  | &nbsp; |
| options.fn |  |  | &nbsp; |
| options.ln |  |  | &nbsp; |
| options.ad |  |  | &nbsp; |
| options.cy |  |  | &nbsp; |
| options.st |  |  | &nbsp; |
| options.zp |  |  | &nbsp; |
| options.ct |  |  | &nbsp; |
| options.em |  |  | &nbsp; |
| options.ph |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.contactUpdate({
  'contact_id': '111111',
  'fn': 'John',
  'ln': 'Smith',
  'ad': '123 N. 1st Street',
  'cy': 'Anywhere',
  'st': 'AZ',
  'zp': '55555',
  'ct': 'US',
  'em': 'test@test.com',
  'ph': '4805555555'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### contactDelete(options) 

[AUTO] Delete a contact profile
See: https://www.namesilo.com/api_reference.php#contactDelete




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.contact_id |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.contactDelete({
  'contact_id': '111111'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### contactDomainAssociate(options) 

[AUTO] Associate a contact profile with a domain
See: https://www.namesilo.com/api_reference.php#contactDomainAssociate




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.administrative |  |  | &nbsp; |
| options.technical |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.contactDomainAssociate({
  'domain': 'namesilo.com',
  'administrative': '11111',
  'technical': '222222'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### changeNameServers(options) 

[AUTO] Change NameServers
See: https://www.namesilo.com/api_reference.php#changeNameServers




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.ns1 |  |  | &nbsp; |
| options.ns2 |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.changeNameServers({
  'domain': 'namesilo.com',
  'ns1': 'NS1.NAMESILO.COM',
  'ns2': 'NS2.NAMESILO.COM'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### dnsListRecords(options) 

[AUTO] List Current DNS Records
See: https://www.namesilo.com/api_reference.php#dnsListRecords




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.dnsListRecords({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'resource_record': [
    {
      'record_id': '1a2b3c4d5e6f',
      'type': 'A',
      'host': 'test.namesilo.com',
      'value': '55.555.55.55',
      'ttl': 7207,
      'distance': 0
    },
    {
      'record_id': '5Brg5hw25jr',
      'type': 'CNAME',
      'host': 'dev.namesilo.com',
      'value': 'testing.namesilo.com',
      'ttl': 7207,
      'distance': 0
    },
    {
      'record_id': 'fH35aH4hsv',
      'type': 'MX',
      'host': 'namesilo.com',
      'value': 'mail.namesilo.com',
      'ttl': 7207,
      'distance': 10
    },
    {
      'record_id': 'Ldfd26Sfbh',
      'type': 'MX',
      'host': 'namesilo.com',
      'value': 'mail2.namesilo.com',
      'ttl': 7207,
      'distance': 20
    }
  ]
}
```


##### Returns


- `Void`



#### dnsAddRecord(options) 

[AUTO] Add DNS Records
See: https://www.namesilo.com/api_reference.php#dnsAddRecord




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.rrtype |  |  | &nbsp; |
| options.rrhost |  |  | &nbsp; |
| options.rrvalue |  |  | &nbsp; |
| options.rrttl |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.dnsAddRecord({
  'domain': 'namesilo.com',
  'rrtype': 'A',
  'rrhost': 'test',
  'rrvalue': '55.55.55.55',
  'rrttl': '7207'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'record_id': '1a2b3c4d5e'
}
```


##### Returns


- `Void`



#### dnsUpdateRecord(options) 

[AUTO] Update DNS Records
See: https://www.namesilo.com/api_reference.php#dnsUpdateRecord




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.rrid |  |  | &nbsp; |
| options.rrhost |  |  | &nbsp; |
| options.rrvalue |  |  | &nbsp; |
| options.rrttl |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.dnsUpdateRecord({
  'domain': 'namesilo.com',
  'rrid': '1a2b3',
  'rrhost': 'test',
  'rrvalue': '55.55.55.55',
  'rrttl': '7207'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'record_id': '1a2b3c4d5e'
}
```


##### Returns


- `Void`



#### dnsDeleteRecord(options) 

[AUTO] Delete DNS Records
See: https://www.namesilo.com/api_reference.php#dnsDeleteRecord




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.rrid |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.dnsDeleteRecord({
  'domain': 'namesilo.com',
  'rrid': '1a2b3'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### dnsSecListRecords(options) 

[AUTO] List Current DS (DNSSEC) Records
See: https://www.namesilo.com/api_reference.php#dnsSecListRecords




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.dnsSecListRecords({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'ds_record': [
    {
      'digest': '123456789ABCDEFGHIJ',
      'digest_type': 1,
      'algorithm': 5,
      'key_tag': 1234
    },
    {
      'digest': '123456789ABCDEFGHIJ',
      'digest_type': 2,
      'algorithm': 3,
      'key_tag': 9876
    }
  ]
}
```


##### Returns


- `Void`



#### dnsSecAddRecord(options) 

[AUTO] Add a DS record (DNSSEC) to your domain
See: https://www.namesilo.com/api_reference.php#dnsSecAddRecord




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.digest |  |  | &nbsp; |
| options.keyTag |  |  | &nbsp; |
| options.digestType |  |  | &nbsp; |
| options.alg |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.dnsSecAddRecord({
  'domain': 'namesilo.com',
  'digest': '123456789',
  'keyTag': '123',
  'digestType': '1',
  'alg': '5'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### dnsSecDeleteRecord(options) 

[AUTO] Delete a DS record (DNSSEC) from your domain
See: https://www.namesilo.com/api_reference.php#dnsSecDeleteRecord




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.digest |  |  | &nbsp; |
| options.keyTag |  |  | &nbsp; |
| options.digestType |  |  | &nbsp; |
| options.alg |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.dnsSecDeleteRecord({
  'domain': 'namesilo.com',
  'digest': '123456789',
  'keyTag': '123',
  'digestType': '1',
  'alg': '5'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### portfolioList(options) 

[AUTO] View active portfolios
See: https://www.namesilo.com/api_reference.php#portfolioList




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |




##### Examples

```javascript
let res = ns.portfolioList({})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'portfolios': {
    'name': [
      'Personal domains',
      'Business domains'
    ]
  }
}
```


##### Returns


- `Void`



#### portfolioAdd(options) 

[AUTO] Add a portfolio
See: https://www.namesilo.com/api_reference.php#portfolioAdd




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.portfolio |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.portfolioAdd({
  'portfolio': 'New Portfolio'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### portfolioDelete(options) 

[AUTO] Delete a portfolio
See: https://www.namesilo.com/api_reference.php#portfolioDelete




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.portfolio |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.portfolioDelete({
  'portfolio': 'New Portfolio'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### portfolioDomainAssociate(options) 

[AUTO] Assign a domain to a portfolio
See: https://www.namesilo.com/api_reference.php#portfolioDomainAssociate




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.portfolio |  |  | &nbsp; |
| options.domains |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.portfolioDomainAssociate({
  'portfolio': 'New Portfolio',
  'domains': 'namesilo.com,namesilo.net,namesilo.info'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'message': 'All supplied domains belonging to your account have been updated.'
}
```


##### Returns


- `Void`



#### listRegisteredNameServers(options) 

[AUTO] List Registered NameServers
See: https://www.namesilo.com/api_reference.php#listRegisteredNameServers




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.listRegisteredNameServers({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'hosts': [
    {
      'host': 'ns1',
      'ip': [
        '123.456.78.9',
        '11.22.33.44'
      ]
    },
    {
      'host': 'ns2',
      'ip': [
        '99.88.77.6'
      ]
    }
  ]
}
```


##### Returns


- `Void`



#### addRegisteredNameServer(options) 

[AUTO] Add a Registered NameServer
See: https://www.namesilo.com/api_reference.php#addRegisteredNameServer




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.new_host |  |  | &nbsp; |
| options.ip1 |  |  | &nbsp; |
| options.ip2 |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.addRegisteredNameServer({
  'domain': 'namesilo.com',
  'new_host': 'ns5',
  'ip1': '123.45.67.8',
  'ip2': '11.22.33.44'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### modifyRegisteredNameServer(options) 

[AUTO] Modify a Registered NameServer
See: https://www.namesilo.com/api_reference.php#modifyRegisteredNameServer




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options. |  | current_host | &nbsp; |
| options.new_host |  |  | &nbsp; |
| options.ip1 |  |  | &nbsp; |
| options.ip2 |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.modifyRegisteredNameServer({
  'domain': 'namesilo.com',
  ' current_host': 'ns5',
  'new_host': 'ns5',
  'ip1': '123.45.67.8',
  'ip2': '11.22.33.44'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### deleteRegisteredNameServer(options) 

[AUTO] Delete a Registered NameServer
See: https://www.namesilo.com/api_reference.php#deleteRegisteredNameServer




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options. |  | current_host | &nbsp; |




##### Examples

```javascript
let res = ns.deleteRegisteredNameServer({
  'domain': 'namesilo.com',
  ' current_host': 'ns5'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### addPrivacy(options) 

[AUTO] Add WHOIS Privacy
See: https://www.namesilo.com/api_reference.php#addPrivacy




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.addPrivacy({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### removePrivacy(options) 

[AUTO] Remove WHOIS Privacy
See: https://www.namesilo.com/api_reference.php#removePrivacy




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.removePrivacy({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### addAutoRenewal(options) 

[AUTO] Add Auto-Renewal
See: https://www.namesilo.com/api_reference.php#addAutoRenewal




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.addAutoRenewal({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 250,
  'detail': 'Domain is already set to AutoRenew - No update made.'
}
```


##### Returns


- `Void`



#### removeAutoRenewal(options) 

[AUTO] Remove Auto-Renewal
See: https://www.namesilo.com/api_reference.php#removeAutoRenewal




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.removeAutoRenewal({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 251,
  'detail': 'Domain is already set not to AutoRenew - No update made.'
}
```


##### Returns


- `Void`



#### retrieveAuthCode(options) 

[AUTO] Retrieve EPP Code
See: https://www.namesilo.com/api_reference.php#retrieveAuthCode




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.retrieveAuthCode({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'Success'
}
```


##### Returns


- `Void`



#### domainForward(options) 

[AUTO] Forward a Domain
See: https://www.namesilo.com/api_reference.php#domainForward




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.protocol |  |  | &nbsp; |
| options.address |  |  | &nbsp; |
| options.method |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.domainForward({
  'domain': 'namesilo.com',
  'protocol': 'http',
  'address': 'google.com',
  'method': '302'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### domainForwardSubDomain(options) 

[AUTO] Forward a Sub-Domain
See: https://www.namesilo.com/api_reference.php#domainForwardSubDomain




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.sub_domain |  |  | &nbsp; |
| options.protocol |  |  | &nbsp; |
| options.address |  |  | &nbsp; |
| options.method |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.domainForwardSubDomain({
  'domain': 'namesilo.com',
  'sub_domain': 'test',
  'protocol': 'http',
  'address': 'google.com',
  'method': '302'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'message': 'The sub-domain has been successfully (created OR modified)'
}
```


##### Returns


- `Void`



#### domainForwardSubDomainDelete(options) 

[AUTO] Delete a Sub-Domain Forward
See: https://www.namesilo.com/api_reference.php#domainForwardSubDomainDelete




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.sub_domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.domainForwardSubDomainDelete({
  'domain': 'namesilo.com',
  'sub_domain': 'test'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### domainLock(options) 

[AUTO] Lock a Domain
See: https://www.namesilo.com/api_reference.php#domainLock




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.domainLock({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 252,
  'detail': 'Domain is already Locked - No update made.'
}
```


##### Returns


- `Void`



#### domainUnlock(options) 

[AUTO] Unlock a Domain
See: https://www.namesilo.com/api_reference.php#domainUnlock




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.domainUnlock({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 253,
  'detail': 'Domain is already Unlocked - No update made.'
}
```


##### Returns


- `Void`



#### listEmailForwards(options) 

[AUTO] View the email forwards for your domain
See: https://www.namesilo.com/api_reference.php#listEmailForwards




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.listEmailForwards({
  'domain': 'namesilo.com'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'addresses': [
    {
      'email': 'test@namesilo.com',
      'forwards_to': [
        'test@test.com',
        'test2@test.com'
      ]
    },
    {
      'email': 'testing@namesilo.com',
      'forwards_to': 'test@test.com'
    }
  ]
}
```


##### Returns


- `Void`



#### configureEmailForward(options) 

[AUTO] Add or modify an email forward for your domain
See: https://www.namesilo.com/api_reference.php#configureEmailForward




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.email |  |  | &nbsp; |
| options.forward1 |  |  | &nbsp; |
| options.forward2 |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.configureEmailForward({
  'domain': 'namesilo.com',
  'email': 'test',
  'forward1': 'test@test.com',
  'forward2': 'test2@test.com'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'message': 'test@namesilo.com has been successfully (\'created\' or \'changed\')'
}
```


##### Returns


- `Void`



#### deleteEmailForward(options) 

[AUTO] Delete an email forward for your domain
See: https://www.namesilo.com/api_reference.php#deleteEmailForward




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.email |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.deleteEmailForward({
  'domain': 'namesilo.com',
  'email': 'test'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'message': 'test@namesilo.com has been deleted'
}
```


##### Returns


- `Void`



#### registrantVerificationStatus(options) 

[AUTO] View the verification status of any Registrant email addresses
See: https://www.namesilo.com/api_reference.php#registrantVerificationStatus




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |




##### Examples

```javascript
let res = ns.registrantVerificationStatus({})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'email': [
    {
      'email_address': 'test@sample.com',
      'domains': 32,
      'verified': 'Yes'
    },
    {
      'email_address': 'anothertest@sample.com',
      'domains': 12,
      'verified': 'No'
    }
  ]
}
```


##### Returns


- `Void`



#### emailVerification(options) 

[AUTO] Verify a Registrant email address
See: https://www.namesilo.com/api_reference.php#emailVerification




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.email |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.emailVerification({
  'email': 'test@example.com'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'message': 'The verification email has been sent'
}
```


##### Returns


- `Void`



#### getAccountBalance(options) 

[AUTO] View NameSilo Account Funds Balance
See: https://www.namesilo.com/api_reference.php#getAccountBalance




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |




##### Examples

```javascript
let res = ns.getAccountBalance({})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'balance': 355.75
}
```


##### Returns


- `Void`



#### addAccountFunds(options) 

[AUTO] Add NameSilo Account Funds
See: https://www.namesilo.com/api_reference.php#addAccountFunds




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.amount |  |  | &nbsp; |
| options.payment_id |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.addAccountFunds({
  'amount': '65.43',
  'payment_id': '123'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'new_balance': 420.61
}
```


##### Returns


- `Void`



#### marketplaceActiveSalesOverview(options) 

[AUTO] View all of your active Marketplace sales
See: https://www.namesilo.com/api_reference.php#marketplaceActiveSalesOverview




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |




##### Examples

```javascript
let res = ns.marketplaceActiveSalesOverview({})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'sale_details': [
    {
      'domain': 'example.com',
      'status': 'active',
      'reserve': 0,
      'buy_now': 0,
      'portfolio': 'none',
      'sale_type': 'Offer/Counter',
      'pay_plan_offered': 'No',
      'end_date': '2018-12-24 00:00:00',
      'auto_extend_days': 0,
      'time_remaining': '1 year',
      'private': 'No',
      'active_bid_or_offer': 'no'
    },
    {
      'domain': 'example2.com',
      'status': 'awaiting payment',
      'reserve': '25.00 (hidden)',
      'buy_now': 150,
      'portfolio': 'For Sale Domains',
      'sale_type': 'Auction',
      'pay_plan_offered': 'Yes',
      'end_date': '2018-11-21 21:21:21',
      'auto_extend_days': 15,
      'time_remaining': '13 days',
      'private': 'Yes',
      'active_bid_or_offer': 'yes'
    }
  ]
}
```


##### Returns


- `Void`



#### marketplaceAddOrModifySale(options) 

[AUTO] Allows you to add a new Marketplace sale or modify and existing sale
See: https://www.namesilo.com/api_reference.php#marketplaceAddOrModifySale




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.action |  |  | &nbsp; |
| options.sale_type |  |  | &nbsp; |
| options.reserve |  |  | &nbsp; |
| options.buy_now |  |  | &nbsp; |
| options.payment_plan_offered |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.marketplaceAddOrModifySale({
  'domain': 'example.com',
  'action': 'add',
  'sale_type': 'auction',
  'reserve': '250.00',
  'buy_now': '750.00',
  'payment_plan_offered': '1'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'message': 'Your selected domains have been added to our marketplace!'
}
```


##### Returns


- `Void`



#### marketplaceLandingPageUpdate(options) 

[AUTO] Allows you to update the appearance of your Marketplace Landing Page
See: https://www.namesilo.com/api_reference.php#marketplaceLandingPageUpdate




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.domain |  |  | &nbsp; |
| options.mp_template |  |  | &nbsp; |
| options.mp_bgcolor |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.marketplaceLandingPageUpdate({
  'domain': 'example.com',
  'mp_template': '2',
  'mp_bgcolor': '000000'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success'
}
```


##### Returns


- `Void`



#### getPrices(options) 

[AUTO] Return our price list
See: https://www.namesilo.com/api_reference.php#getPrices




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |




##### Examples

```javascript
let res = ns.getPrices({})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'com': {
    'registration': 8.99,
    'transfer': 8.39,
    'renew': 8.99
  },
  'net': {
    'registration': 9.29,
    'transfer': 8.99,
    'renew': 9.29
  }
}
```


##### Returns


- `Void`



#### listOrders(options) 

[AUTO] Returns Complete Account Order History
See: https://www.namesilo.com/api_reference.php#listOrders




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |




##### Examples

```javascript
let res = ns.listOrders({})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'order': [
    {
      'order_number': 77777,
      'order_date': '2016-12-24 12:12:12',
      'method': 'Bitcoin',
      'total': 26.97
    },
    {
      'order_number': 888888,
      'order_date': '2016-12-24 13:14:15',
      'method': 'PayPal',
      'total': 8.99
    }
  ]
}
```


##### Returns


- `Void`



#### orderDetails(options) 

[AUTO] View Details For Provided Order Number
See: https://www.namesilo.com/api_reference.php#orderDetails




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| options | `Object`  |  | &nbsp; |
| options.order_number |  |  | &nbsp; |




##### Examples

```javascript
let res = ns.orderDetails({
  'order_number': '77777'
})
```
```javascript
// Output
{
  'code': 300,
  'detail': 'success',
  'order_date': '2016-12-24 12:12:12',
  'method': 'Bitcoin',
  'total': 26.97,
  'order_details': [
    {
      'description': 'testdomain.com - registration',
      'years_qty': 2,
      'price': 8.99,
      'subtotal': 17.98,
      'status': 'Processed'
    },
    {
      'description': 'testdomain2.com - renewal',
      'years_qty': 1,
      'price': 8.99,
      'subtotal': 8.99,
      'status': 'Credited',
      'credited_date': '2016-12-25 09:09:09',
      'credited_amount': 8.99
    }
  ]
}
```


##### Returns


- `Void`




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
