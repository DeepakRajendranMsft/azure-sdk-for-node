// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ca49042-782a-4cc9-89b5-ee1b487fe115';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4662/providers/Microsoft.Storage/storageAccounts/testacc1561?api-version=2015-05-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '18cd0207-d4f5-4813-ae59-0e06da8394df',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '782803a5-3945-40c7-8367-f77f5cf19cc7',
  'x-ms-routing-request-id': 'EASTUS:20150817T072818Z:782803a5-3945-40c7-8367-f77f5cf19cc7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 17 Aug 2015 07:28:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/nodeTestGroup4662/providers/Microsoft.Storage/storageAccounts/testacc1561?api-version=2015-05-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'x-ms-request-id': '18cd0207-d4f5-4813-ae59-0e06da8394df',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': '782803a5-3945-40c7-8367-f77f5cf19cc7',
  'x-ms-routing-request-id': 'EASTUS:20150817T072818Z:782803a5-3945-40c7-8367-f77f5cf19cc7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Mon, 17 Aug 2015 07:28:17 GMT',
  connection: 'close' });
 return result; }]];