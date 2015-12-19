# gulp-nightwatch [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

## Usage

First, install `gulp-nightwatch` as a development dependency:

```sh
npm install --save-dev gulp-nightwatch
```

Then, write your gulpfile.js as below.

```javascript
var gulp = require('gulp'),
    nightwatch = require('gulp-nightwatch');

gulp.task('default', function() {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'test/nightwatch.json'
    }));
});
```

You can pass command line options to Nightwatch as an array by using the option `cliArgs`.

```javascript
gulp.task('nightwatch:chrome', function(){
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'test/nightwatch.json',
      cliArgs: [ '--env chrome', '--tag sandbox' ]
    }));
});
```

You may use an object instead, if you prefer.

```javascript
gulp.task('nightwatch:chrome', function(){
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'test/nightwatch.json',
      cliArgs: {
        env: 'chrome',
        tag: 'sandbox'
      }
    }));
});
```

## API

### nightwatch(options)

#### options

##### configFile

Type: `String`
Default: `nightwatch.json`

The path to your Nightwatch config

##### cliArgs

Type: `Array` or `Object`
Default: null

Command line options for Nightwatch


[npm-image]: https://img.shields.io/npm/v/gulp-nightwatch.svg
[npm-url]: https://www.npmjs.com/package/gulp-nightwatch
[travis-image]: https://img.shields.io/travis/tatsuyafw/gulp-nightwatch.svg
[travis-url]: https://travis-ci.org/tatsuyafw/gulp-nightwatch
