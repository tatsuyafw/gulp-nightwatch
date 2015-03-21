var gulp = require('gulp');
var nightwatch = require('../');

gulp.task('default', function() {
  gulp.src('')
    .pipe(nightwatch({
      configFile: 'nightwatch.json'
    }));
});

gulp.task('withCliArgs:array', function() {
  gulp.src('')
    .pipe(nightwatch({
      configFile: 'nightwatch.json',
      cliArgs: [ '--env chrome', '--tags sandbox' ]
    }));
});

gulp.task('withCliArgs:object', function() {
  gulp.src('')
    .pipe(nightwatch({
      configFile: 'nightwatch.json',
      cliArgs: {
        env: "chrome",
        tags: "sandbox"
      }
    }));
});
