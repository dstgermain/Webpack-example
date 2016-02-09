/* global __dirname */

const path = require('path');
const webpack = require('webpack');
const dirSrc = path.resolve(__dirname, 'src');
const dirDist = path.resolve(__dirname, 'dist');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [path.resolve(dirSrc, 'app.js')],
  output: {
    path: dirDist,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!' +
           'css-loader!autoprefixer-loader?{browsers:["last 2 version", "ie 10"]}!' +
           'sass-loader?outputStyle=expanded'
      }
      // {
      //   test: /\.scss$/,
      //   loader: ExtractTextPlugin.extract(
      //      'style',
      //      'css!autoprefixer?{browsers:["last 2 version", "ie 10"]}!' +
      //      'sass?outputStyle=expanded')
      // }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    //new ExtractTextPlugin('app.css')
  ],
  stats: {
    // Nice colored output
    colors: true
  },
  // Create source maps for the bundle
  devtool: 'source-map'
};
