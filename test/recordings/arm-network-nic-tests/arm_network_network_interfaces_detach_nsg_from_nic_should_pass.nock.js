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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AttachNsgToNicName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName\",\r\n  \"etag\": \"W/\\\"2f5a1223-12e7-4fe1-84b2-48d090752897\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"17343eb6-b993-47da-b365-63d016671fcd\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"2f5a1223-12e7-4fe1-84b2-48d090752897\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"5dtqlaizrz2u3oigxss00ou0ld.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1956',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2f5a1223-12e7-4fe1-84b2-48d090752897"',
  'x-ms-request-id': 'f925691c-616a-4728-81c5-8709bc4dd4cf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '8ba0cc8f-cd83-4465-8fd5-26a9f7dfe593',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134944Z:8ba0cc8f-cd83-4465-8fd5-26a9f7dfe593',
  date: 'Fri, 16 Jun 2017 13:49:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AttachNsgToNicName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName\",\r\n  \"etag\": \"W/\\\"2f5a1223-12e7-4fe1-84b2-48d090752897\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"17343eb6-b993-47da-b365-63d016671fcd\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"2f5a1223-12e7-4fe1-84b2-48d090752897\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"5dtqlaizrz2u3oigxss00ou0ld.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false,\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    }\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1956',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"2f5a1223-12e7-4fe1-84b2-48d090752897"',
  'x-ms-request-id': 'f925691c-616a-4728-81c5-8709bc4dd4cf',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '8ba0cc8f-cd83-4465-8fd5-26a9f7dfe593',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134944Z:8ba0cc8f-cd83-4465-8fd5-26a9f7dfe593',
  date: 'Fri, 16 Jun 2017 13:49:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"AttachNsgToNicName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName\",\r\n  \"etag\": \"W/\\\"6736d841-7784-450d-977a-361bbce60037\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"17343eb6-b993-47da-b365-63d016671fcd\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"6736d841-7784-450d-977a-361bbce60037\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"5dtqlaizrz2u3oigxss00ou0ld.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1745',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ce0ae47d-d2c3-4587-9c56-8e0649688ce5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/ce0ae47d-d2c3-4587-9c56-8e0649688ce5?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8511df22-3b4e-4aee-9cde-20da3b15748b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134945Z:8511df22-3b4e-4aee-9cde-20da3b15748b',
  date: 'Fri, 16 Jun 2017 13:49:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"AttachNsgToNicName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName\",\r\n  \"etag\": \"W/\\\"6736d841-7784-450d-977a-361bbce60037\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"17343eb6-b993-47da-b365-63d016671fcd\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"6736d841-7784-450d-977a-361bbce60037\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"5dtqlaizrz2u3oigxss00ou0ld.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1745',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ce0ae47d-d2c3-4587-9c56-8e0649688ce5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/ce0ae47d-d2c3-4587-9c56-8e0649688ce5?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '8511df22-3b4e-4aee-9cde-20da3b15748b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134945Z:8511df22-3b4e-4aee-9cde-20da3b15748b',
  date: 'Fri, 16 Jun 2017 13:49:45 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AttachNsgToNicName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName\",\r\n  \"etag\": \"W/\\\"6736d841-7784-450d-977a-361bbce60037\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"17343eb6-b993-47da-b365-63d016671fcd\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"6736d841-7784-450d-977a-361bbce60037\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"5dtqlaizrz2u3oigxss00ou0ld.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1745',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6736d841-7784-450d-977a-361bbce60037"',
  'x-ms-request-id': '273a0d49-1621-468d-8d1e-e68e534a47e3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '99a2ffe7-59b2-4121-83b0-b19251b98596',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134946Z:99a2ffe7-59b2-4121-83b0-b19251b98596',
  date: 'Fri, 16 Jun 2017 13:49:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AttachNsgToNicName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName\",\r\n  \"etag\": \"W/\\\"6736d841-7784-450d-977a-361bbce60037\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"17343eb6-b993-47da-b365-63d016671fcd\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"6736d841-7784-450d-977a-361bbce60037\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"5dtqlaizrz2u3oigxss00ou0ld.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1745',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6736d841-7784-450d-977a-361bbce60037"',
  'x-ms-request-id': '273a0d49-1621-468d-8d1e-e68e534a47e3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '99a2ffe7-59b2-4121-83b0-b19251b98596',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134946Z:99a2ffe7-59b2-4121-83b0-b19251b98596',
  date: 'Fri, 16 Jun 2017 13:49:46 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AttachNsgToNicName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName\",\r\n  \"etag\": \"W/\\\"6736d841-7784-450d-977a-361bbce60037\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"17343eb6-b993-47da-b365-63d016671fcd\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"6736d841-7784-450d-977a-361bbce60037\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"5dtqlaizrz2u3oigxss00ou0ld.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1745',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6736d841-7784-450d-977a-361bbce60037"',
  'x-ms-request-id': '66e5ba59-26ac-4df6-b152-aece80c9a766',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': 'eda79c0e-85ff-4358-b1ab-c79ec714fa7d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134948Z:eda79c0e-85ff-4358-b1ab-c79ec714fa7d',
  date: 'Fri, 16 Jun 2017 13:49:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"AttachNsgToNicName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName\",\r\n  \"etag\": \"W/\\\"6736d841-7784-450d-977a-361bbce60037\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"17343eb6-b993-47da-b365-63d016671fcd\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-ip-config\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName/ipConfigurations/default-ip-config\",\r\n        \"etag\": \"W/\\\"6736d841-7784-450d-977a-361bbce60037\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"5dtqlaizrz2u3oigxss00ou0ld.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1745',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"6736d841-7784-450d-977a-361bbce60037"',
  'x-ms-request-id': '66e5ba59-26ac-4df6-b152-aece80c9a766',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': 'eda79c0e-85ff-4358-b1ab-c79ec714fa7d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134948Z:eda79c0e-85ff-4358-b1ab-c79ec714fa7d',
  date: 'Fri, 16 Jun 2017 13:49:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/35541933-9853-4d54-9e5c-25ccaa0e11f5?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '35541933-9853-4d54-9e5c-25ccaa0e11f5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/35541933-9853-4d54-9e5c-25ccaa0e11f5?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5a20b2d8-a744-41bd-8f2c-0ae7cd6087b3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134950Z:5a20b2d8-a744-41bd-8f2c-0ae7cd6087b3',
  date: 'Fri, 16 Jun 2017 13:49:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/AttachNsgToNicName?api-version=2017-03-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/35541933-9853-4d54-9e5c-25ccaa0e11f5?api-version=2017-03-01',
  'retry-after': '10',
  'x-ms-request-id': '35541933-9853-4d54-9e5c-25ccaa0e11f5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/35541933-9853-4d54-9e5c-25ccaa0e11f5?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '5a20b2d8-a744-41bd-8f2c-0ae7cd6087b3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T134950Z:5a20b2d8-a744-41bd-8f2c-0ae7cd6087b3',
  date: 'Fri, 16 Jun 2017 13:49:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/35541933-9853-4d54-9e5c-25ccaa0e11f5?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '260c0747-35fe-49b4-99ab-e94101ad38ee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': '7878c2f5-b2c2-407c-9fd1-3478cf64e5e3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T135020Z:7878c2f5-b2c2-407c-9fd1-3478cf64e5e3',
  date: 'Fri, 16 Jun 2017 13:50:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/35541933-9853-4d54-9e5c-25ccaa0e11f5?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '260c0747-35fe-49b4-99ab-e94101ad38ee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': '7878c2f5-b2c2-407c-9fd1-3478cf64e5e3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170616T135020Z:7878c2f5-b2c2-407c-9fd1-3478cf64e5e3',
  date: 'Fri, 16 Jun 2017 13:50:20 GMT',
  connection: 'close' });
 return result; }]];