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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"81f7b5be-307c-4421-b491-f9884aa4e6aa\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"260f517b-6a7b-4b5e-ab89-5db5fc796d29\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '676',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"81f7b5be-307c-4421-b491-f9884aa4e6aa"',
  'x-ms-request-id': '69eab34f-4b62-4a39-bcfc-1525e7e0c46c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'f9b5ce67-f834-4ec1-81ff-50bbcd8033ed',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124115Z:f9b5ce67-f834-4ec1-81ff-50bbcd8033ed',
  date: 'Tue, 20 Jun 2017 12:41:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"81f7b5be-307c-4421-b491-f9884aa4e6aa\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"260f517b-6a7b-4b5e-ab89-5db5fc796d29\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '676',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"81f7b5be-307c-4421-b491-f9884aa4e6aa"',
  'x-ms-request-id': '69eab34f-4b62-4a39-bcfc-1525e7e0c46c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': 'f9b5ce67-f834-4ec1-81ff-50bbcd8033ed',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124115Z:f9b5ce67-f834-4ec1-81ff-50bbcd8033ed',
  date: 'Tue, 20 Jun 2017 12:41:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"de919af0-1d7f-42ca-b305-77cf7ced38f2\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"260f517b-6a7b-4b5e-ab89-5db5fc796d29\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\",\r\n        \"11.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\",\r\n        \"10.0.0.32\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '721',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '962ab1c8-40e6-44e2-9a28-94167f8d6976',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/962ab1c8-40e6-44e2-9a28-94167f8d6976?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5a0ba450-2d4b-4790-ae3e-e62eaca11bba',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124116Z:5a0ba450-2d4b-4790-ae3e-e62eaca11bba',
  date: 'Tue, 20 Jun 2017 12:41:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"de919af0-1d7f-42ca-b305-77cf7ced38f2\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"260f517b-6a7b-4b5e-ab89-5db5fc796d29\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\",\r\n        \"11.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\",\r\n        \"10.0.0.32\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '721',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '962ab1c8-40e6-44e2-9a28-94167f8d6976',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/962ab1c8-40e6-44e2-9a28-94167f8d6976?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5a0ba450-2d4b-4790-ae3e-e62eaca11bba',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124116Z:5a0ba450-2d4b-4790-ae3e-e62eaca11bba',
  date: 'Tue, 20 Jun 2017 12:41:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/962ab1c8-40e6-44e2-9a28-94167f8d6976?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '94a21713-0944-426e-afc2-9870d4d28df2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '44a2a733-6178-4d50-8e49-c247f83a0df5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124148Z:44a2a733-6178-4d50-8e49-c247f83a0df5',
  date: 'Tue, 20 Jun 2017 12:41:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/962ab1c8-40e6-44e2-9a28-94167f8d6976?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '94a21713-0944-426e-afc2-9870d4d28df2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '44a2a733-6178-4d50-8e49-c247f83a0df5',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124148Z:44a2a733-6178-4d50-8e49-c247f83a0df5',
  date: 'Tue, 20 Jun 2017 12:41:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"e77e05cd-30bb-49d5-a9aa-d3e005d5c158\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"260f517b-6a7b-4b5e-ab89-5db5fc796d29\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\",\r\n        \"11.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\",\r\n        \"10.0.0.32\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '722',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e77e05cd-30bb-49d5-a9aa-d3e005d5c158"',
  'x-ms-request-id': '0db3b5ed-2eea-4c95-9497-2cbc497a8556',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14936',
  'x-ms-correlation-request-id': 'fb42d95c-b0cf-403e-997b-6d6a5bf1105e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124149Z:fb42d95c-b0cf-403e-997b-6d6a5bf1105e',
  date: 'Tue, 20 Jun 2017 12:41:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName\",\r\n  \"etag\": \"W/\\\"e77e05cd-30bb-49d5-a9aa-d3e005d5c158\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"260f517b-6a7b-4b5e-ab89-5db5fc796d29\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\",\r\n        \"11.0.0.0/16\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.0.0.42\",\r\n        \"10.0.0.32\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '722',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"e77e05cd-30bb-49d5-a9aa-d3e005d5c158"',
  'x-ms-request-id': '0db3b5ed-2eea-4c95-9497-2cbc497a8556',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14936',
  'x-ms-correlation-request-id': 'fb42d95c-b0cf-403e-997b-6d6a5bf1105e',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124149Z:fb42d95c-b0cf-403e-997b-6d6a5bf1105e',
  date: 'Tue, 20 Jun 2017 12:41:49 GMT',
  connection: 'close' });
 return result; }]];