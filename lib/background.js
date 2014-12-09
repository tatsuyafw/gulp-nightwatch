var nightwatch = require('nightwatch');
var data = JSON.parse(process.argv[2]);
nightwatch.runner(data);
