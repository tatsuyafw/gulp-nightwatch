var gulp = require('gulp');
var nightwatch = require('../');

gulp.task('default', function() {
  gulp.src('nightwatch.json')
    .pipe(nightwatch());
});
