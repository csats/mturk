'use strict';

Package.describe({
  name: 'csats:mturk',
  summary: 'Basic mTurk API for Meteor',
  version: '0.1.13',
  git: 'https://github.com/csats/meteor-mturk'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('meteor-platform');

  api.addFiles([
    'lib/js/mturk.js'
  ], ['server']);

  api.export('MTurk', ['server']);
});

Package.onTest(function(api){
  api.use('csats:mturk');
  api.use('tinytest');
  api.add_files('mturk-tests.js');
});

Npm.depends({
  'request': '2.51.0',
  'libxmljs': '0.18.0',
  'validator': '2.0.0',
  'async': '0.9.0'
});
