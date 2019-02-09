'use strict';
var WebPackDevServer = require('webpack-dev-server');
var Webpack = require('webpack');
var path = require('path');

var config = require('./webpack.config.js');
const options = {
  // hot: true,
  host: 'localhost',
  filename: config.output.filename,
  inline: true,
  publicPath: config.output.publicPath,
  contentBase: path.join(__dirname, 'client'),
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {
    colors: true,
  },
};

WebPackDevServer.addDevServerEntrypoints(config, options);
var compiler = Webpack(config);
var server = new WebPackDevServer(compiler, options);

console.log('config.output: ', config.output);
server.listen(8089, 'localhost', function() {
  console.log('Webpack Server is running........................', arguments);
});
