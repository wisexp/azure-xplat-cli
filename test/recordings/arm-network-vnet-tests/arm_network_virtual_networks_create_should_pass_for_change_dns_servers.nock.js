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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/changeDnsServersName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '282935e2-431f-4d01-93a0-d4460966f011',
  'x-ms-correlation-request-id': '282935e2-431f-4d01-93a0-d4460966f011',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124516Z:282935e2-431f-4d01-93a0-d4460966f011',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Jun 2017 12:45:15 GMT',
  connection: 'close',
  'content-length': '173' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/virtualNetworks/changeDnsServersName' under resource group 'xplat-test-vnet' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '282935e2-431f-4d01-93a0-d4460966f011',
  'x-ms-correlation-request-id': '282935e2-431f-4d01-93a0-d4460966f011',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124516Z:282935e2-431f-4d01-93a0-d4460966f011',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 20 Jun 2017 12:45:15 GMT',
  connection: 'close',
  'content-length': '173' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"466aa1c1-1420-4c38-a27f-52e8561a5285\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"03968777-ac5d-4997-ac8f-a7c3a1bf98c5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '596',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '038977e5-ab35-4f6d-b028-63ef267b6042',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/038977e5-ab35-4f6d-b028-63ef267b6042?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '25ed18ab-5c4a-48ac-99a8-9ad20dd3aa5d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124520Z:25ed18ab-5c4a-48ac-99a8-9ad20dd3aa5d',
  date: 'Tue, 20 Jun 2017 12:45:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"466aa1c1-1420-4c38-a27f-52e8561a5285\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"03968777-ac5d-4997-ac8f-a7c3a1bf98c5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '596',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '038977e5-ab35-4f6d-b028-63ef267b6042',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/038977e5-ab35-4f6d-b028-63ef267b6042?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '25ed18ab-5c4a-48ac-99a8-9ad20dd3aa5d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124520Z:25ed18ab-5c4a-48ac-99a8-9ad20dd3aa5d',
  date: 'Tue, 20 Jun 2017 12:45:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/038977e5-ab35-4f6d-b028-63ef267b6042?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e39d50c8-bfda-4fbd-b23b-82ac7272ae5a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': 'd56638da-fab5-41af-bcfb-e02712d59706',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124551Z:d56638da-fab5-41af-bcfb-e02712d59706',
  date: 'Tue, 20 Jun 2017 12:45:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/038977e5-ab35-4f6d-b028-63ef267b6042?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e39d50c8-bfda-4fbd-b23b-82ac7272ae5a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': 'd56638da-fab5-41af-bcfb-e02712d59706',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124551Z:d56638da-fab5-41af-bcfb-e02712d59706',
  date: 'Tue, 20 Jun 2017 12:45:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"4aa97224-dd1b-4ece-b1d4-5e29af0253a7\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"03968777-ac5d-4997-ac8f-a7c3a1bf98c5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '597',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4aa97224-dd1b-4ece-b1d4-5e29af0253a7"',
  'x-ms-request-id': 'd68981a0-ca24-4224-b838-787ad2f40be8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '05214c33-3f4a-4989-8e05-ce7a538a85c2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124552Z:05214c33-3f4a-4989-8e05-ce7a538a85c2',
  date: 'Tue, 20 Jun 2017 12:45:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"4aa97224-dd1b-4ece-b1d4-5e29af0253a7\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"03968777-ac5d-4997-ac8f-a7c3a1bf98c5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '597',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4aa97224-dd1b-4ece-b1d4-5e29af0253a7"',
  'x-ms-request-id': 'd68981a0-ca24-4224-b838-787ad2f40be8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '05214c33-3f4a-4989-8e05-ce7a538a85c2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124552Z:05214c33-3f4a-4989-8e05-ce7a538a85c2',
  date: 'Tue, 20 Jun 2017 12:45:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"4aa97224-dd1b-4ece-b1d4-5e29af0253a7\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"03968777-ac5d-4997-ac8f-a7c3a1bf98c5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '597',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4aa97224-dd1b-4ece-b1d4-5e29af0253a7"',
  'x-ms-request-id': '8de81a03-6eef-4436-a872-9a3125353a6f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '73041a20-a7a9-49c7-8f0a-9b9eb52cf382',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124554Z:73041a20-a7a9-49c7-8f0a-9b9eb52cf382',
  date: 'Tue, 20 Jun 2017 12:45:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"4aa97224-dd1b-4ece-b1d4-5e29af0253a7\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"03968777-ac5d-4997-ac8f-a7c3a1bf98c5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '597',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4aa97224-dd1b-4ece-b1d4-5e29af0253a7"',
  'x-ms-request-id': '8de81a03-6eef-4436-a872-9a3125353a6f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14986',
  'x-ms-correlation-request-id': '73041a20-a7a9-49c7-8f0a-9b9eb52cf382',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124554Z:73041a20-a7a9-49c7-8f0a-9b9eb52cf382',
  date: 'Tue, 20 Jun 2017 12:45:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"2761671a-0b27-48f8-b390-948906e6f6a3\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"03968777-ac5d-4997-ac8f-a7c3a1bf98c5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '681',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '65874a55-61c2-4aa4-9796-363f9afed800',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/65874a55-61c2-4aa4-9796-363f9afed800?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b500b85e-65a1-41c5-8d70-4ebd4bb621a9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124557Z:b500b85e-65a1-41c5-8d70-4ebd4bb621a9',
  date: 'Tue, 20 Jun 2017 12:45:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"2761671a-0b27-48f8-b390-948906e6f6a3\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"03968777-ac5d-4997-ac8f-a7c3a1bf98c5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '681',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': '65874a55-61c2-4aa4-9796-363f9afed800',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/65874a55-61c2-4aa4-9796-363f9afed800?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b500b85e-65a1-41c5-8d70-4ebd4bb621a9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124557Z:b500b85e-65a1-41c5-8d70-4ebd4bb621a9',
  date: 'Tue, 20 Jun 2017 12:45:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/65874a55-61c2-4aa4-9796-363f9afed800?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e45ddc86-948f-41c1-ad43-a8efde1443d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '6a9df5fe-509c-430b-9fb4-8ad534a539c9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124628Z:6a9df5fe-509c-430b-9fb4-8ad534a539c9',
  date: 'Tue, 20 Jun 2017 12:46:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/65874a55-61c2-4aa4-9796-363f9afed800?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e45ddc86-948f-41c1-ad43-a8efde1443d5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '6a9df5fe-509c-430b-9fb4-8ad534a539c9',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124628Z:6a9df5fe-509c-430b-9fb4-8ad534a539c9',
  date: 'Tue, 20 Jun 2017 12:46:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"752b7f54-838a-4d29-a794-bc925c4d2c97\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"03968777-ac5d-4997-ac8f-a7c3a1bf98c5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '682',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"752b7f54-838a-4d29-a794-bc925c4d2c97"',
  'x-ms-request-id': '53644a08-79d5-43ca-a0e8-2ef3d7f4f78f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14926',
  'x-ms-correlation-request-id': '69165271-9bae-41d5-813b-7aea6e2f4518',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124630Z:69165271-9bae-41d5-813b-7aea6e2f4518',
  date: 'Tue, 20 Jun 2017 12:46:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"752b7f54-838a-4d29-a794-bc925c4d2c97\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"03968777-ac5d-4997-ac8f-a7c3a1bf98c5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '682',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"752b7f54-838a-4d29-a794-bc925c4d2c97"',
  'x-ms-request-id': '53644a08-79d5-43ca-a0e8-2ef3d7f4f78f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14926',
  'x-ms-correlation-request-id': '69165271-9bae-41d5-813b-7aea6e2f4518',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124630Z:69165271-9bae-41d5-813b-7aea6e2f4518',
  date: 'Tue, 20 Jun 2017 12:46:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"752b7f54-838a-4d29-a794-bc925c4d2c97\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"03968777-ac5d-4997-ac8f-a7c3a1bf98c5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '682',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"752b7f54-838a-4d29-a794-bc925c4d2c97"',
  'x-ms-request-id': '3655a0d9-a2b8-4005-be40-2e015071306f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': '759ddde5-05e5-4038-b284-093958bfde4d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124632Z:759ddde5-05e5-4038-b284-093958bfde4d',
  date: 'Tue, 20 Jun 2017 12:46:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"changeDnsServersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName\",\r\n  \"etag\": \"W/\\\"752b7f54-838a-4d29-a794-bc925c4d2c97\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworks\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"03968777-ac5d-4997-ac8f-a7c3a1bf98c5\",\r\n    \"addressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"10.0.0.0/8\"\r\n      ]\r\n    },\r\n    \"dhcpOptions\": {\r\n      \"dnsServers\": [\r\n        \"10.20.30.40\"\r\n      ]\r\n    },\r\n    \"subnets\": [],\r\n    \"virtualNetworkPeerings\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '682',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"752b7f54-838a-4d29-a794-bc925c4d2c97"',
  'x-ms-request-id': '3655a0d9-a2b8-4005-be40-2e015071306f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14939',
  'x-ms-correlation-request-id': '759ddde5-05e5-4038-b284-093958bfde4d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124632Z:759ddde5-05e5-4038-b284-093958bfde4d',
  date: 'Tue, 20 Jun 2017 12:46:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/86e6696c-46a8-4914-9960-8af9d07c8c0a?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '86e6696c-46a8-4914-9960-8af9d07c8c0a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/86e6696c-46a8-4914-9960-8af9d07c8c0a?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'cf27fb2d-eb97-4338-bb19-dddefb568191',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124634Z:cf27fb2d-eb97-4338-bb19-dddefb568191',
  date: 'Tue, 20 Jun 2017 12:46:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-vnet/providers/Microsoft.Network/virtualNetworks/changeDnsServersName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/86e6696c-46a8-4914-9960-8af9d07c8c0a?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '86e6696c-46a8-4914-9960-8af9d07c8c0a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/86e6696c-46a8-4914-9960-8af9d07c8c0a?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'cf27fb2d-eb97-4338-bb19-dddefb568191',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124634Z:cf27fb2d-eb97-4338-bb19-dddefb568191',
  date: 'Tue, 20 Jun 2017 12:46:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/86e6696c-46a8-4914-9960-8af9d07c8c0a?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '23920952-2815-4d89-861b-609b92e2a0cd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'c12be34b-cef0-401b-9305-0f5ec1c99397',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124706Z:c12be34b-cef0-401b-9305-0f5ec1c99397',
  date: 'Tue, 20 Jun 2017 12:47:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/86e6696c-46a8-4914-9960-8af9d07c8c0a?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '23920952-2815-4d89-861b-609b92e2a0cd',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': 'c12be34b-cef0-401b-9305-0f5ec1c99397',
  'x-ms-routing-request-id': 'WESTEUROPE:20170620T124706Z:c12be34b-cef0-401b-9305-0f5ec1c99397',
  date: 'Tue, 20 Jun 2017 12:47:05 GMT',
  connection: 'close' });
 return result; }]];