var nightwatchPlugin = require('../');
var expect = require('chai').expect;
var PluginError = require('plugin-error');
require('mocha');

describe('gulp-nightwatch', function() {
  describe('nightwatchPlugin', function() {
    it('should exist', function() {
      expect(nightwatchPlugin).to.exist;
    });

    describe('options', function() {
      describe('with configFile option', function() {
        it ('should throw if configFile is not string', function() {
          expect(function() {
            nightwatchPlugin({ configFile: {} });
          }).to.throw('configFile option must be string');
        });
      });

      describe('with cliArgs option', function() {
        it ('should throw if cliArgs is not array or object', function() {
          expect(function() {
            nightwatchPlugin({ cliArgs: 'args' });
          }).to.throw('cliArgs option must be array or object');
        });
      });
    });
  });
});
