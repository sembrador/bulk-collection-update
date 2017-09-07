Npm.depends({
  fibers: '2.0.0'
});

Package.describe({
  name: 'bulk-collection-update',
  summary: "Bulk insert/update/delete documents in a collection",
  version: "0.5.2",
  git: "https://github.com/sembrador/bulk-collection-update.git",
  environments: ['server']
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.2');
  api.use('ecmascript');
  api.mainModule('bulk-collection-update.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bulk-collection-update');
  api.mainModule('bulk-collection-update-tests.js');
});
