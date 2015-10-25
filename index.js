'use strict';

var through2 = require('through2');
var gutil = require('gulp-util');
var helper = require('./lib/helper');
var path = require('path');
var spawn = require('child_process').spawn;
var PluginError = gutil.PluginError;

var PLUGIN_NAME = 'gulp-nightwatch';

module.exports = function(options) {
  var child,
      stream,
      nightwatchOptions = { config: 'nightwatch.json', env: 'default' };

  options = options || {};

  if (options.configFile) {
    if (typeof options.configFile === 'string') {
      nightwatchOptions.config = path.resolve(options.configFile);
    } else {
      throw new PluginError(PLUGIN_NAME, 'configFile option must be string');
    }
  }

  if (options.cliArgs) {
    helper.merge(nightwatchOptions, helper.parseCliArgs(options.cliArgs));
  }

  function done(code) {
    if (child) {
      child.kill();
    }

    if (stream) {
      if (code) {
        stream.emit('error', new PluginError(PLUGIN_NAME, 'nightwatch exited with code ' + code));
      } else {
        stream.emit('end');
      }
    }
  }

  function startNightwatch() {
    gutil.log('Starting nightwatch...');

    child = spawn(
      'node',
      [
        path.join(__dirname, 'lib', 'background.js'),
        JSON.stringify(nightwatchOptions) // Nightwatch args
      ],
      {
        stdio: 'inherit'
      }
    );

    child.on('exit', function(code) {
      done(code);
    });
  }

  stream = through2.obj(
    function(chunk, enc, cb) {
      cb(null, chunk);
    },
    function(cb) {
      startNightwatch();
      cb();
    }
  );
  return stream;

};
