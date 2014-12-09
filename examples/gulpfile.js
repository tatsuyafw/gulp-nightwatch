var gulp = require('gulp');
var nightwatch = require('../');

gulp.task('default', function() {
  gulp.src('')
    .pipe(nightwatch({
      configFile: 'nightwatch.json'
    }));
});
