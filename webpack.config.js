'use strict';
const path = require('path');

module.exports = {
  entry: './client/app/app.module.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
};
// // This means your bundle file will called bundle.js and will be placed at dist folder
// output: {
//   path: path.join(__dirname, 'client/dist'),
//   publicPath: 'http://localhost:8087/dist',
//   filename: 'bundle.js',
// },
