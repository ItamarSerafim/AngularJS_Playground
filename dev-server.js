'use strict';
var WebPackDevServer = require('webpack-dev-server');
var Webpack = require('webpack');
var config = require('./webpack.config.js');
var path = require('path');

var compiler = Webpack(config);
console.log('config.output: ', config.output);
var server = new WebPackDevServer(compiler, {
  hot: true,
  filename: config.output.filename,
  inline: true,
  publicPath: config.output.publicPath,
  contentBase: path.join(__dirname, 'client'),
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {
    colors: true,
  },
});

server.listen(8089, 'localhost', function() {
  console.log('Webpack Server is running........................', arguments);
});
