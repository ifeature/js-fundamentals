'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './js/main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8080
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.Tether": 'tether'
    })
  ]
};