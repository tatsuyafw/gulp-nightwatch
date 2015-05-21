var gulp = require('gulp');
var nightwatch = require('../');

gulp.task('default', function() {
  gulp.src('')
    .pipe(nightwatch({
      configFile: 'nightwatch.json'
    }));
});

gulp.task('withNoOptions', function() {
  gulp.src('')
    .pipe(nightwatch());
});

gulp.task('withCliArgs:array', function() {
  gulp.src('')
    .pipe(nightwatch({
      configFile: 'nightwatch.json',
      cliArgs: [ '--env chrome', '--tag sandbox' ]
    }));
});

gulp.task('withCliArgs:object', function() {
  gulp.src('')
    .pipe(nightwatch({
      configFile: 'nightwatch.json',
      cliArgs: {
        env: 'chrome',
        tag: 'sandbox'
      }
    }));
});

gulp.task('withCliArgs:testcase', function() {
  gulp.src('')
    .pipe(nightwatch({
      configFile: 'nightwatch.json',
      cliArgs: {
        test: 'tests/github',
        testcase: "Demo: GitHub Title Test"
      }
      // or, cliArgs: [ '--test tests/github', '--testcase="Demo: GitHub Title Test"' ]
    }));
});
