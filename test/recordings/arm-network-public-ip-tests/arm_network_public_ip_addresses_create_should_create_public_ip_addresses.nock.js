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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/publicIPAddressName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4664eb8c-263d-44a1-86bf-bb1bb4608b84',
  'x-ms-correlation-request-id': '4664eb8c-263d-44a1-86bf-bb1bb4608b84',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T124510Z:4664eb8c-263d-44a1-86bf-bb1bb4608b84',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 22 Jun 2017 12:45:10 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/publicIPAddresses/publicIPAddressName' under resource group 'xplat-test-public-ip' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '4664eb8c-263d-44a1-86bf-bb1bb4608b84',
  'x-ms-correlation-request-id': '4664eb8c-263d-44a1-86bf-bb1bb4608b84',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T124510Z:4664eb8c-263d-44a1-86bf-bb1bb4608b84',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 22 Jun 2017 12:45:10 GMT',
  connection: 'close',
  'content-length': '179' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"90b51173-54ef-476d-860a-b78efff061cb\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"59f2eb92-c9da-4471-9b61-b1d5f0890ecd\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '713',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'a0da03b6-0a3f-4c33-a29f-540291e9a588',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/a0da03b6-0a3f-4c33-a29f-540291e9a588?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b6b7b55e-5ce5-4c93-9137-0ab949e60bc7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T124516Z:b6b7b55e-5ce5-4c93-9137-0ab949e60bc7',
  date: 'Thu, 22 Jun 2017 12:45:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01', '*')
  .reply(201, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"90b51173-54ef-476d-860a-b78efff061cb\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"59f2eb92-c9da-4471-9b61-b1d5f0890ecd\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '713',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '3',
  'x-ms-request-id': 'a0da03b6-0a3f-4c33-a29f-540291e9a588',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/a0da03b6-0a3f-4c33-a29f-540291e9a588?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b6b7b55e-5ce5-4c93-9137-0ab949e60bc7',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T124516Z:b6b7b55e-5ce5-4c93-9137-0ab949e60bc7',
  date: 'Thu, 22 Jun 2017 12:45:15 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/a0da03b6-0a3f-4c33-a29f-540291e9a588?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3c166b9f-59b9-49c3-b87f-4db9839a091d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': 'd7393454-9c93-4e2a-b844-dd0d5f34f630',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T124547Z:d7393454-9c93-4e2a-b844-dd0d5f34f630',
  date: 'Thu, 22 Jun 2017 12:45:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/southeastasia/operations/a0da03b6-0a3f-4c33-a29f-540291e9a588?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3c166b9f-59b9-49c3-b87f-4db9839a091d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14966',
  'x-ms-correlation-request-id': 'd7393454-9c93-4e2a-b844-dd0d5f34f630',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T124547Z:d7393454-9c93-4e2a-b844-dd0d5f34f630',
  date: 'Thu, 22 Jun 2017 12:45:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"27a84e1a-cdb0-4864-8d09-d0f26f47c621\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"59f2eb92-c9da-4471-9b61-b1d5f0890ecd\",\r\n    \"ipAddress\": \"52.187.1.106\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '748',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"27a84e1a-cdb0-4864-8d09-d0f26f47c621"',
  'x-ms-request-id': '36fcdff1-ef8c-4f66-b771-5e05d1b5b8d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '49404946-ad6d-446c-bc40-eb2fb2eb769c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T124549Z:49404946-ad6d-446c-bc40-eb2fb2eb769c',
  date: 'Thu, 22 Jun 2017 12:45:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"publicIPAddressName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\",\r\n  \"etag\": \"W/\\\"27a84e1a-cdb0-4864-8d09-d0f26f47c621\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"59f2eb92-c9da-4471-9b61-b1d5f0890ecd\",\r\n    \"ipAddress\": \"52.187.1.106\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Static\",\r\n    \"idleTimeoutInMinutes\": 15,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"labelcreate\",\r\n      \"fqdn\": \"labelcreate.southeastasia.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/publicIPAddresses\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '748',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"27a84e1a-cdb0-4864-8d09-d0f26f47c621"',
  'x-ms-request-id': '36fcdff1-ef8c-4f66-b771-5e05d1b5b8d7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '49404946-ad6d-446c-bc40-eb2fb2eb769c',
  'x-ms-routing-request-id': 'WESTEUROPE:20170622T124549Z:49404946-ad6d-446c-bc40-eb2fb2eb769c',
  date: 'Thu, 22 Jun 2017 12:45:49 GMT',
  connection: 'close' });
 return result; }]];