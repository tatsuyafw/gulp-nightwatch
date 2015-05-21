'use strict';

var parse = require('shell-quote').parse;
var parseArgs = require('minimist');
var PluginError = require('gulp-util').PluginError;
var util = require('util');

var PLUGIN_NAME = 'gulp-nightwatch';

exports.merge = function(dest, src) {
  var prop;
  for (prop in src) {
    dest[prop] = src[prop];
  }
};

exports.parseCliArgs = function(cliArgs) {
  if (util.isArray(cliArgs)) {
    cliArgs = cliArgs.map(function(arg) {
      return parse(arg);
    });
    cliArgs = exports.flattenArrays(cliArgs);
    cliArgs = parseArgs(cliArgs);

    // Delete unnecessary '_' property.
    // See: https://github.com/substack/minimist#var-argv--parseargsargs-opts
    delete cliArgs['_'];
  } else if (typeof cliArgs === 'object') {
    // Nothing to do.
  } else {
    throw new PluginError(PLUGIN_NAME, 'cliArgs option must be array or object');
  }

  return cliArgs;
};

exports.flattenArrays = function(arrays) {
  return [].concat.apply([], arrays);
};
