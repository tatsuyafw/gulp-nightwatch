var path = require('path');
var nightwatch = require('nightwatch');
var originalArgv = JSON.parse(process.argv[2]);

nightwatch.cli(function(argv) {
  for (var key in originalArgv) {
    if (key === 'env' && originalArgv[key].indexOf(',') > -1 && argv['parallel-mode'] === true) {
      continue;
    }
    argv[key] = originalArgv[key];
  }

  if (argv.test) {
    argv.test = path.resolve(argv.test);
  }

  nightwatch.runner(argv);
});
