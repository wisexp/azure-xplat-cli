// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e0b81f36-36ba-44f7-b550-7c9344a35893',
    name: 'IOTHUB_PERF_1',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestiothubrg';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+tY=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1626',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '66aabbed-9d56-4712-b666-62a5fb1a868f',
  'x-ms-correlation-request-id': '66aabbed-9d56-4712-b666-62a5fb1a868f',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235627Z:66aabbed-9d56-4712-b666-62a5fb1a868f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:56:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs?api-version=2016-02-03')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/xplattestiothubrg/providers/Microsoft.Devices/IotHubs/xplattestiothub3259\",\"name\":\"xplattestiothub3259\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"westus\",\"tags\":{\"t1\":\"v1\"},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"xplattestiothubrg\",\"etag\":\"AAAAAABQ+tY=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"hostName\":\"xplattestiothub3259.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":5,\"partitionCount\":2,\"partitionIds\":[\"0\",\"1\"],\"path\":\"xplattestiothub3259-operationMonitoring\",\"endpoint\":\"sb://iothub-ns-xplattesti-59254-e44d57a8ca.servicebus.windows.net/\"}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":50,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":1}},\"operationsMonitoringProperties\":{\"events\":{\"None\":\"None\",\"Connections\":\"None\",\"DeviceTelemetry\":\"None\",\"C2DCommands\":\"None\",\"DeviceIdentityOperations\":\"None\",\"FileUploadOperations\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S2\",\"tier\":\"Standard\",\"capacity\":2}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1626',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-request-id': '66aabbed-9d56-4712-b666-62a5fb1a868f',
  'x-ms-correlation-request-id': '66aabbed-9d56-4712-b666-62a5fb1a868f',
  'x-ms-routing-request-id': 'CENTRALUS:20160809T235627Z:66aabbed-9d56-4712-b666-62a5fb1a868f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 09 Aug 2016 23:56:27 GMT',
  connection: 'close' });
 return result; }]];