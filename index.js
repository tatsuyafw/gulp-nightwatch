'use strict';

var through = require('through');
var log = require('fancy-log');
var helper = require('./lib/helper');
var path = require('path');
var spawn = require('child_process').spawn;
var PluginError = require('plugin-error');

var PLUGIN_NAME = 'gulp-nightwatch';

var nightwatchPlugin = function(options) {
  var child,
      stream,
      files = [],
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

    if(options.abortOnFailure === true && stream) {
      if (code) {
        stream.emit('error', new PluginError(PLUGIN_NAME, 'nightwatch exited with code ' + code));
      } else {
        stream.emit('end');
      }
    } else {
      stream.emit('end');
    }
  }

  function startNightwatch() {
    log('Starting nightwatch...');

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

  function queueFile(file) {
    if (file) {
      files.push(file.path);
    }
  }

  function endStream() {
    if (files.length) {
      options.files = files;
    }

    startNightwatch();
  }

  stream = through(queueFile, endStream);
  return stream;

};

module.exports = nightwatchPlugin;
