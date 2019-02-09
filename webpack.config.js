'use strict';
const path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var HTMLWebpackPlugin = require('html-webpack-plugin');

const externalLibPluginProvider =
// For now we don't need any of these plugins
new webpack.ProvidePlugin({
  angular: 'angular',
  ngAria: 'angular-aria',
  ngAnimate: 'angular-animate',
  ngMaterial: 'angular-material',
  ngResource: 'angular-resource',
  uiRouter: 'angular-ui-router',
  // textAngular: 'textAngular',
  // Chart: 'chart.js',
  // ChartJs: 'chart.js'
});
module.exports = {
  entry: {
    test: './src/client/app/print.ts',
    main: './src/client/app/main.ts',
  },
  mode: 'development',
  // devtool: 'eval-source-map',
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist',
  //   // hot: true,
  // },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    externalLibPluginProvider,
    // ['style-loader', 'css-loader?localIdentName=[path][name]-[local]'],
  ],
  externals: {
    angular: 'angular',
    ngResource: 'angular-resource',
    uiRouter: 'angular-ui-router',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'ngtemplate-loader?relativeTo=' + (path.resolve(__dirname, './src')) + '/!html-loader',
        exclude: /index.template\.html/, //attention to this. If omited it will break the building
      },
      // {
      //   test: /\.html$/,
      //   use: ['file-loader?name=[name].[ext]', 'extract-loader', 'html-loader'],
      // },
      // {
      //   test: /\.html$/,
      //   use: [{
      //     loader: 'html-loader',
      //     options: {
      //       minimize: true,
      //     },
      //   }],
      // },
      // {
      //   test: /\.ts?$/,
      //   // use: 'ts-loader',
      //   loader: 'ts-loader',
      //   // include: ['/node_modules/@types/angular-ui-router/'],
      //   // exclude: ['/node_modules/', '/client/vendor/'],
      // },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  resolve: { // Why this?
    extensions: ['.tsx', '.ts', '.js'],
  },
  context: __dirname,
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './client/dist/'),
    // publicPath: '/',
    // publicPath: '/dist/',
    publicPath: 'http://localhost:8089/dist/',
  },
};
// // This means your bundle file will called bundle.js and will be placed at dist folder
// output: {
//   path: path.join(__dirname, 'client/dist'),
//   publicPath: 'http://localhost:8087/dist',
//   filename: 'bundle.js',
// },
