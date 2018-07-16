var path = require('path');
var nightwatch = require('nightwatch');
var originalArgv = JSON.parse(process.argv[2]);
var log = require('fancy-log');

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

  const runner = nightwatch.CliRunner(argv);
  runner.setup()
    .startWebDriver()
    .then(() => {
      return runner.runTests();
    })
    .then(() => {
      return runner.stopWebDriver();
    }).catch(err => {
      log.error(err);
    });
});
