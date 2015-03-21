'use strict';

var es = require('event-stream');
var gutil = require('gulp-util');
var nightwatch = require('nightwatch');
var path = require('path');
var spawn = require('child_process').spawn;
var PluginError = gutil.PluginError;

var PLUGIN_NAME = 'gulp-nightwatch';

var nightwatchPlugin = function(options) {
  var child;
  var stream;
  var files = [];

  if (options.configFile) {
    options.configFile = path.resolve(options.configFile);
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
    gutil.log('Starting nigthwatch...');

    child = spawn(
      'node',
      [
        path.join(__dirname, 'lib', 'background.js'),
        JSON.stringify({
          config: options.configFile,
          env: 'default'
        })
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
    gutil.log("log file");
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

  stream = es.through(queueFile, endStream);
  return stream;

};

module.exports = nightwatchPlugin;
