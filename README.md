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
      configFile: 'test/nightwatch.json'
    }));
});
```

You can pass Nightwatch command line options as Array using `cliArgs` option.

```javascript
gulp.task('nightwatch:chrome', function(){
  gulp.src('')
    .pipe(nightwatch({
      configFile: 'test/nightwatch.json'
      cliArgs: [ '--env chrome', '--tag sandbox' ]
    }));
});
```

You can also use Object for `cliArgs`.

```javascript
gulp.task('nightwatch:chrome', function(){
  gulp.src('')
    .pipe(nightwatch({
      configFile: 'test/nightwatch.json'
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
