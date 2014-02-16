var express       = require('express')

var requireAssets = require('require-assets')
var serveAssets   = require('require-assets-middleware').createServeAssets;

var registry      = requireAssets.fromFile('./assets.json')

express()
  .use(serveAssets(registry))
  .use(express.static(__dirname))
  .listen(3000, function() {
    console.log('point your browser at http://localhost:3000')
  });
