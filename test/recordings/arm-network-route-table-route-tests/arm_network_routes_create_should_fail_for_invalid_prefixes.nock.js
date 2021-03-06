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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName?api-version=2017-03-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '272',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8f19c8e1-1131-4b38-a005-650bad1a7d2b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '41de6d3e-040e-4111-a2e0-8a6cfce1f6f7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T143123Z:41de6d3e-040e-4111-a2e0-8a6cfce1f6f7',
  date: 'Fri, 02 Jun 2017 14:31:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName?api-version=2017-03-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '272',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8f19c8e1-1131-4b38-a005-650bad1a7d2b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '41de6d3e-040e-4111-a2e0-8a6cfce1f6f7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T143123Z:41de6d3e-040e-4111-a2e0-8a6cfce1f6f7',
  date: 'Fri, 02 Jun 2017 14:31:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidCIDRNotation\",\r\n    \"message\": \"The address prefix 10.11.12.13/8 in resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName has an invalid CIDR notation. For the given prefix length, the address prefix should be 10.0.0.0/8.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '408',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9a5049b8-5705-4a35-bf03-60562845dfa0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '4d564e61-d648-48c1-9668-1aaefcd54e88',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T143125Z:4d564e61-d648-48c1-9668-1aaefcd54e88',
  date: 'Fri, 02 Jun 2017 14:31:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidCIDRNotation\",\r\n    \"message\": \"The address prefix 10.11.12.13/8 in resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-route/providers/Microsoft.Network/routeTables/routeTableName/routes/invalidPrefixesName has an invalid CIDR notation. For the given prefix length, the address prefix should be 10.0.0.0/8.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '408',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '9a5049b8-5705-4a35-bf03-60562845dfa0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-correlation-request-id': '4d564e61-d648-48c1-9668-1aaefcd54e88',
  'x-ms-routing-request-id': 'WESTEUROPE:20170602T143125Z:4d564e61-d648-48c1-9668-1aaefcd54e88',
  date: 'Fri, 02 Jun 2017 14:31:24 GMT',
  connection: 'close' });
 return result; }]];