var nightwatch = require('nightwatch');
var argv = JSON.parse(process.argv[2]);
nightwatch.runner(argv);
