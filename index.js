'use strict';

var through = require('through2');
var gutil = require('gulp-util');
var nightwatch = require('nightwatch');
var PluginError = gutil.PluginError;

var PLUGIN_NAME = 'gulp-nightwatch';

var nightwatchPlugin = function(opts) {
  var stream = through.obj(function(file, enc, cb) {
    
    if (file.isNull()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Missing a configuration file!'));
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
      return cb();
    }

    if (file.isBuffer()) {
      gutil.log(file.path);

      var runner = nightwatch.runner({
        config: file.path,
        env : 'default',
        output: 'output'
      }).init();

      return cb();
    }

    this.push(file);

    return cb();
  });

  return stream;
};

module.exports = nightwatchPlugin;
