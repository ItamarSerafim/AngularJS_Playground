'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = (module.exports = loopback());

var path = require('path');

// Getting rid of '#' from url when using angular ui-router
// This solution comes from: https://www.theodo.fr/blog/2017/01/pretty-url-in-angularjs-and-loopback-drop-the/
// List here the paths you do not want to be redirected to the angular application (scripts, stylesheets, templates, loopback REST API, ...)
var ignoredPaths = [
  '/vendor',
  '/client/vendor',
  '/css',
  '/js',
  '/views',
  '/api',
  '/build',
  '/images',
  '/src',
  '/parts',
  '/explorer',
  '/mngt',
  '/mngt/src',
  '/admin',
  '/components',
];

app.all('/*', function(req, res, next) {
  // Redirecting to index only the requests that do not start with ignored paths
  debugger;
  if (!startsWith(req.url, ignoredPaths))
    res.sendFile('index.html', {
      root: path.resolve(__dirname, '..', 'client'),
    });
  else next();
});

function startsWith(str, array) {
  for (var i = 0; i < array.length; i++)
    if (str.startsWith(array[i])) return true;
  return false;
}
// ===========================================

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) app.start();
});
