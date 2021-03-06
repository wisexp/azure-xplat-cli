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
    registeredProviders: ['mobileservice'],
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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"networkWatchersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName\",\r\n  \"etag\": \"W/\\\"7c65e236-ea63-40fb-945b-a5591262a604\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '431',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7c65e236-ea63-40fb-945b-a5591262a604"',
  'x-ms-request-id': '50d780aa-0519-4118-8fbf-aba3e2099f00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'ddcb16f0-4d13-4fa0-9b86-bb7ed1580f99',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104050Z:ddcb16f0-4d13-4fa0-9b86-bb7ed1580f99',
  date: 'Wed, 15 Feb 2017 10:40:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"networkWatchersName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName\",\r\n  \"etag\": \"W/\\\"7c65e236-ea63-40fb-945b-a5591262a604\\\"\",\r\n  \"type\": \"Microsoft.Network/networkWatchers\",\r\n  \"location\": \"westcentralus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"runningOperationIds\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '431',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"7c65e236-ea63-40fb-945b-a5591262a604"',
  'x-ms-request-id': '50d780aa-0519-4118-8fbf-aba3e2099f00',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'ddcb16f0-4d13-4fa0-9b86-bb7ed1580f99',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104050Z:ddcb16f0-4d13-4fa0-9b86-bb7ed1580f99',
  date: 'Wed, 15 Feb 2017 10:40:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName/topology?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"id\": \"3ad219ec-f739-4194-a01c-e558762e5f32\",\r\n  \"createdDateTime\": \"2017-02-15T10:40:51.8066149Z\",\r\n  \"lastModified\": \"0001-01-01T00:00:00\",\r\n  \"resources\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '168',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/0130d46c-e67e-4793-b417-4877f8e1a032?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '0130d46c-e67e-4793-b417-4877f8e1a032',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/0130d46c-e67e-4793-b417-4877f8e1a032?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a8821a33-7fda-4adf-a81c-3b79f45e999a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104051Z:a8821a33-7fda-4adf-a81c-3b79f45e999a',
  date: 'Wed, 15 Feb 2017 10:40:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-watcher/providers/Microsoft.Network/networkWatchers/networkWatchersName/topology?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"id\": \"3ad219ec-f739-4194-a01c-e558762e5f32\",\r\n  \"createdDateTime\": \"2017-02-15T10:40:51.8066149Z\",\r\n  \"lastModified\": \"0001-01-01T00:00:00\",\r\n  \"resources\": []\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '168',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operationResults/0130d46c-e67e-4793-b417-4877f8e1a032?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '0130d46c-e67e-4793-b417-4877f8e1a032',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westcentralus/operations/0130d46c-e67e-4793-b417-4877f8e1a032?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'a8821a33-7fda-4adf-a81c-3b79f45e999a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170215T104051Z:a8821a33-7fda-4adf-a81c-3b79f45e999a',
  date: 'Wed, 15 Feb 2017 10:40:51 GMT',
  connection: 'close' });
 return result; }]];
