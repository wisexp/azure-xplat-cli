// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5764?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"0b9f8e57-bb04-418d-a3c8-9f7ce897c57f\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"16.04.0-LTS\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"xplatvmStSp5764_clifcf1c418507a8411-os-1486513304943\",\r\n        \"createOption\": \"FromImage\",\r\n        \"caching\": \"ReadWrite\",\r\n        \"managedDisk\": {\r\n          \"storageAccountType\": \"Standard_LRS\",\r\n          \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Compute/disks/xplatvmStSp5764_clifcf1c418507a8411-os-1486513304943\"\r\n        }\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmStSp5764\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Network/networkInterfaces/xplattestnicStSp4638\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplattstoragestsp6839.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5764\",\r\n  \"name\": \"xplatvmStSp5764\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3441',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '52248f58-c5ff-44a9-9ac6-63a4de7ad369',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '30ee21bb-a047-49ba-abc6-b4dac292ed55',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002905Z:30ee21bb-a047-49ba-abc6-b4dac292ed55',
  date: 'Wed, 08 Feb 2017 00:29:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5764?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"0b9f8e57-bb04-418d-a3c8-9f7ce897c57f\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"16.04.0-LTS\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"xplatvmStSp5764_clifcf1c418507a8411-os-1486513304943\",\r\n        \"createOption\": \"FromImage\",\r\n        \"caching\": \"ReadWrite\",\r\n        \"managedDisk\": {\r\n          \"storageAccountType\": \"Standard_LRS\",\r\n          \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Compute/disks/xplatvmStSp5764_clifcf1c418507a8411-os-1486513304943\"\r\n        }\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmStSp5764\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Network/networkInterfaces/xplattestnicStSp4638\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplattstoragestsp6839.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5764\",\r\n  \"name\": \"xplatvmStSp5764\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '3441',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '52248f58-c5ff-44a9-9ac6-63a4de7ad369',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '30ee21bb-a047-49ba-abc6-b4dac292ed55',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002905Z:30ee21bb-a047-49ba-abc6-b4dac292ed55',
  date: 'Wed, 08 Feb 2017 00:29:05 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5764?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f87c3412-ffc3-45f9-8fb6-7c49ab805046?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f87c3412-ffc3-45f9-8fb6-7c49ab805046?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': 'f87c3412-ffc3-45f9-8fb6-7c49ab805046',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '9e401285-935b-45a3-a0fb-933503e16476',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002907Z:9e401285-935b-45a3-a0fb-933503e16476',
  date: 'Wed, 08 Feb 2017 00:29:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert4830/providers/Microsoft.Compute/virtualMachines/xplatvmStSp5764?api-version=2016-04-30-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f87c3412-ffc3-45f9-8fb6-7c49ab805046?monitor=true&api-version=2016-04-30-preview',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f87c3412-ffc3-45f9-8fb6-7c49ab805046?api-version=2016-04-30-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': 'f87c3412-ffc3-45f9-8fb6-7c49ab805046',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': '9e401285-935b-45a3-a0fb-933503e16476',
  'x-ms-routing-request-id': 'WESTUS2:20170208T002907Z:9e401285-935b-45a3-a0fb-933503e16476',
  date: 'Wed, 08 Feb 2017 00:29:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f87c3412-ffc3-45f9-8fb6-7c49ab805046?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:29:06.3140878+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"f87c3412-ffc3-45f9-8fb6-7c49ab805046\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '134b3e41-e078-4cdc-a7f3-7bff1b9b3e7c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '4c9b30e9-cadd-4869-8c91-87156c1feb47',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T002938Z:4c9b30e9-cadd-4869-8c91-87156c1feb47',
  date: 'Wed, 08 Feb 2017 00:29:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f87c3412-ffc3-45f9-8fb6-7c49ab805046?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:29:06.3140878+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"f87c3412-ffc3-45f9-8fb6-7c49ab805046\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '134b3e41-e078-4cdc-a7f3-7bff1b9b3e7c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '4c9b30e9-cadd-4869-8c91-87156c1feb47',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T002938Z:4c9b30e9-cadd-4869-8c91-87156c1feb47',
  date: 'Wed, 08 Feb 2017 00:29:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f87c3412-ffc3-45f9-8fb6-7c49ab805046?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:29:06.3140878+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"f87c3412-ffc3-45f9-8fb6-7c49ab805046\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '00c8965d-6c61-442e-bfd3-526486e02071',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'ee1210ae-29d0-495a-a15c-aa5fb3ce08df',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T003009Z:ee1210ae-29d0-495a-a15c-aa5fb3ce08df',
  date: 'Wed, 08 Feb 2017 00:30:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f87c3412-ffc3-45f9-8fb6-7c49ab805046?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:29:06.3140878+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"f87c3412-ffc3-45f9-8fb6-7c49ab805046\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '00c8965d-6c61-442e-bfd3-526486e02071',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'ee1210ae-29d0-495a-a15c-aa5fb3ce08df',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T003009Z:ee1210ae-29d0-495a-a15c-aa5fb3ce08df',
  date: 'Wed, 08 Feb 2017 00:30:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f87c3412-ffc3-45f9-8fb6-7c49ab805046?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:29:06.3140878+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"f87c3412-ffc3-45f9-8fb6-7c49ab805046\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '9d978c02-adf6-4af7-b587-f122e08ee018',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '53d631df-7fce-4ad1-8924-e8dd84c7589f',
  'x-ms-routing-request-id': 'WESTUS2:20170208T003041Z:53d631df-7fce-4ad1-8924-e8dd84c7589f',
  date: 'Wed, 08 Feb 2017 00:30:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f87c3412-ffc3-45f9-8fb6-7c49ab805046?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:29:06.3140878+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"f87c3412-ffc3-45f9-8fb6-7c49ab805046\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '9d978c02-adf6-4af7-b587-f122e08ee018',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '53d631df-7fce-4ad1-8924-e8dd84c7589f',
  'x-ms-routing-request-id': 'WESTUS2:20170208T003041Z:53d631df-7fce-4ad1-8924-e8dd84c7589f',
  date: 'Wed, 08 Feb 2017 00:30:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f87c3412-ffc3-45f9-8fb6-7c49ab805046?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:29:06.3140878+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"f87c3412-ffc3-45f9-8fb6-7c49ab805046\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '0f0610db-b1fa-477a-af07-a02ef078a4c0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '1edb04bb-bb66-471b-ac57-49dd85f3940d',
  'x-ms-routing-request-id': 'WESTUS2:20170208T003112Z:1edb04bb-bb66-471b-ac57-49dd85f3940d',
  date: 'Wed, 08 Feb 2017 00:31:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f87c3412-ffc3-45f9-8fb6-7c49ab805046?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:29:06.3140878+00:00\",\r\n  \"status\": \"InProgress\",\r\n  \"name\": \"f87c3412-ffc3-45f9-8fb6-7c49ab805046\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': '0f0610db-b1fa-477a-af07-a02ef078a4c0',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14983',
  'x-ms-correlation-request-id': '1edb04bb-bb66-471b-ac57-49dd85f3940d',
  'x-ms-routing-request-id': 'WESTUS2:20170208T003112Z:1edb04bb-bb66-471b-ac57-49dd85f3940d',
  date: 'Wed, 08 Feb 2017 00:31:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f87c3412-ffc3-45f9-8fb6-7c49ab805046?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:29:06.3140878+00:00\",\r\n  \"endTime\": \"2017-02-08T00:31:11.9746712+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"f87c3412-ffc3-45f9-8fb6-7c49ab805046\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': 'e504804c-a241-4207-baf8-0a1c7c48303c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '7c1e6528-68d8-423f-a13c-c963a9c050d9',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T003143Z:7c1e6528-68d8-423f-a13c-c963a9c050d9',
  date: 'Wed, 08 Feb 2017 00:31:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/operations/f87c3412-ffc3-45f9-8fb6-7c49ab805046?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"startTime\": \"2017-02-08T00:29:06.3140878+00:00\",\r\n  \"endTime\": \"2017-02-08T00:31:11.9746712+00:00\",\r\n  \"status\": \"Succeeded\",\r\n  \"name\": \"f87c3412-ffc3-45f9-8fb6-7c49ab805046\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '184',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'dce02487-9cda-4782-8138-773eb1573792_131281364616989495',
  'x-ms-request-id': 'e504804c-a241-4207-baf8-0a1c7c48303c',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '7c1e6528-68d8-423f-a13c-c963a9c050d9',
  'x-ms-routing-request-id': 'CENTRALUS:20170208T003143Z:7c1e6528-68d8-423f-a13c-c963a9c050d9',
  date: 'Wed, 08 Feb 2017 00:31:43 GMT',
  connection: 'close' });
 return result; }]];