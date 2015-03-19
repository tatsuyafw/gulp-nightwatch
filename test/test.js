var nightwatchPlugin = require('../');
var expect = require('chai').expect;
require('mocha');

describe('gulp-nightwatch', function() {
  describe('nightwatchPlugin', function() {
    it('should exist', function() {
      expect(nightwatchPlugin).to.exist;
    });
  });
});
