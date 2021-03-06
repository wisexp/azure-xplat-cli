// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/invalidDnsServersName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/invalidDnsServersName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '698da71e-2702-4a96-8ea7-72523607c89f',
  'x-ms-correlation-request-id': '698da71e-2702-4a96-8ea7-72523607c89f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124353Z:698da71e-2702-4a96-8ea7-72523607c89f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Jun 2017 12:43:53 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/invalidDnsServersName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/invalidDnsServersName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '698da71e-2702-4a96-8ea7-72523607c89f',
  'x-ms-correlation-request-id': '698da71e-2702-4a96-8ea7-72523607c89f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124353Z:698da71e-2702-4a96-8ea7-72523607c89f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Jun 2017 12:43:53 GMT',
  connection: 'close',
  'content-length': '174' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/invalidDnsServersName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"NetcfgInvalidDnsServer\",\r\n    \"message\": \"DNS server is not valid as specified with the name '0'.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '156',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9619ac45-6038-4d5b-860d-b8ce1628809b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'dde8f76e-fe23-4e5c-8c77-47615ad97ae7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124357Z:dde8f76e-fe23-4e5c-8c77-47615ad97ae7',
  date: 'Tue, 20 Jun 2017 12:43:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/invalidDnsServersName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"NetcfgInvalidDnsServer\",\r\n    \"message\": \"DNS server is not valid as specified with the name '0'.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '156',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9619ac45-6038-4d5b-860d-b8ce1628809b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'dde8f76e-fe23-4e5c-8c77-47615ad97ae7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124357Z:dde8f76e-fe23-4e5c-8c77-47615ad97ae7',
  date: 'Tue, 20 Jun 2017 12:43:57 GMT',
  connection: 'close' });
 return result; }]];