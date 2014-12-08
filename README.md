gulp-nightwatch
===============

## Usage

First, install `gulp-nightwatch` as a development dependency:

```sh
npm install --save-dev gulp-nightwatch
```

Then, write your gulpfile.js as bellow.

```javascript
var gulp = require('gulp'),
    nightwatch = require('gulp-nightwatch');

var configFile = 'nightwatch.json';

gulp.task('default', function() {
   gulp.src(configFile)
     .pipe(nightwatch({
     }));
});
```

## API
Work in Progress...
