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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/InvalidPrivateIPAddressName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/InvalidPrivateIPAddressName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '54741c13-e4c3-4559-8806-d1b0bf99ff17',
  'x-ms-correlation-request-id': '54741c13-e4c3-4559-8806-d1b0bf99ff17',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134920Z:54741c13-e4c3-4559-8806-d1b0bf99ff17',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 16 Jun 2017 13:49:19 GMT',
  connection: 'close',
  'content-length': '181' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/InvalidPrivateIPAddressName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/networkInterfaces/InvalidPrivateIPAddressName' under resource group 'xplat-test-nic' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '54741c13-e4c3-4559-8806-d1b0bf99ff17',
  'x-ms-correlation-request-id': '54741c13-e4c3-4559-8806-d1b0bf99ff17',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134920Z:54741c13-e4c3-4559-8806-d1b0bf99ff17',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 16 Jun 2017 13:49:19 GMT',
  connection: 'close',
  'content-length': '181' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"subnetName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n  \"etag\": \"W/\\\"7ecd4300-f360-4b28-8798-f7a0ab1100ae\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '361',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7ecd4300-f360-4b28-8798-f7a0ab1100ae"',
  'x-ms-request-id': '5ddfbc95-4efa-4896-9729-790f3e0aece3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '9b68b960-0cd9-45d5-ae5a-2b4a4e215788',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134921Z:9b68b960-0cd9-45d5-ae5a-2b4a4e215788',
  date: 'Fri, 16 Jun 2017 13:49:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"subnetName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n  \"etag\": \"W/\\\"7ecd4300-f360-4b28-8798-f7a0ab1100ae\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '361',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7ecd4300-f360-4b28-8798-f7a0ab1100ae"',
  'x-ms-request-id': '5ddfbc95-4efa-4896-9729-790f3e0aece3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14985',
  'x-ms-correlation-request-id': '9b68b960-0cd9-45d5-ae5a-2b4a4e215788',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134921Z:9b68b960-0cd9-45d5-ae5a-2b4a4e215788',
  date: 'Fri, 16 Jun 2017 13:49:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"463b67eb-b281-435d-b3e1-46b5ab70d3ab\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f60cc44c-4088-46e2-a62e-eebc0e3b5995\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '568',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"463b67eb-b281-435d-b3e1-46b5ab70d3ab"',
  'x-ms-request-id': '675dcdef-13e1-486f-a9ee-d580599581c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '36eab308-b293-4e6c-acf4-860540436c4c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134922Z:36eab308-b293-4e6c-acf4-860540436c4c',
  date: 'Fri, 16 Jun 2017 13:49:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"463b67eb-b281-435d-b3e1-46b5ab70d3ab\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"f60cc44c-4088-46e2-a62e-eebc0e3b5995\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '568',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"463b67eb-b281-435d-b3e1-46b5ab70d3ab"',
  'x-ms-request-id': '675dcdef-13e1-486f-a9ee-d580599581c8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '36eab308-b293-4e6c-acf4-860540436c4c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134922Z:36eab308-b293-4e6c-acf4-860540436c4c',
  date: 'Fri, 16 Jun 2017 13:49:22 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/InvalidPrivateIPAddressName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidPrivateIPAddressFormat\",\r\n    \"message\": \"Private static IP address value 10.11.12.13.14 is invalid.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '166',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '641a6cdd-d8f8-44cf-b5c2-99907da1b0e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ddc5e9cb-88c6-485c-a0d3-27bde0cb6f71',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134926Z:ddc5e9cb-88c6-485c-a0d3-27bde0cb6f71',
  date: 'Fri, 16 Jun 2017 13:49:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/InvalidPrivateIPAddressName?api-version=2017-03-01', '*')
  .reply(400, "{\r\n  \"error\": {\r\n    \"code\": \"InvalidPrivateIPAddressFormat\",\r\n    \"message\": \"Private static IP address value 10.11.12.13.14 is invalid.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '166',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '641a6cdd-d8f8-44cf-b5c2-99907da1b0e0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'ddc5e9cb-88c6-485c-a0d3-27bde0cb6f71',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134926Z:ddc5e9cb-88c6-485c-a0d3-27bde0cb6f71',
  date: 'Fri, 16 Jun 2017 13:49:25 GMT',
  connection: 'close' });
 return result; }]];