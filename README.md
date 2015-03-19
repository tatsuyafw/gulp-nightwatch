# gulp-nightwatch [![Build Status](https://travis-ci.org/tatsuyafw/gulp-nightwatch.svg?branch=master)](https://travis-ci.org/tatsuyafw/gulp-nightwatch)

## Usage

First, install `gulp-nightwatch` as a development dependency:

```sh
npm install --save-dev gulp-nightwatch
```

Then, write your gulpfile.js as bellow.

```javascript
var gulp = require('gulp'),
    nightwatch = require('gulp-nightwatch');

gulp.task('default', function() {
   gulp.src('')
     .pipe(nightwatch({
       configFile: "test/nightwatch.json"
     }));
});
```

## API
Work in Progress...
