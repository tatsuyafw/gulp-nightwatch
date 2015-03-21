'use strict';

var parseArgs = require('minimist');
var util = require('util');

exports.merge = function(dest, src) {
  var prop;
  for (prop in src) {
    dest[prop] = src[prop];
  }
};

exports.parseCliArgs = function(cliArgs) {
  if (util.isArray(cliArgs)) {
    cliArgs = cliArgs.map(function(arg) {
      var separator = ' ';
      if (~arg.indexOf('=')) {
        separator = '=';
      }
      return arg.split(separator);
    });
    cliArgs = exports.flattenArrays(cliArgs);
    cliArgs = parseArgs(cliArgs);

    // Delete unnecessary '_' property.
    // See: https://github.com/substack/minimist#var-argv--parseargsargs-opts
    delete cliArgs['_'];
  } else if (typeof cliArgs === 'object') {
    // Nothing to do.
  }

  return cliArgs;
};

exports.flattenArrays = function(arrays) {
  return [].concat.apply([], arrays);
};
