/* global __dirname */
const path = require('path');
const webpack = require('webpack');
const dirSrc = path.resolve(__dirname, 'src');
const dirDist = path.resolve(__dirname, 'dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dynamicCssLoader = process.env.NODE_ENV !== 'production' ?
  'style-loader!' +
  'css-loader!autoprefixer-loader?{browsers:["last 2 version", "ie 10"]}!' +
  'sass-loader?outputStyle=expanded' : ExtractTextPlugin.extract(
  'style',
  'css!autoprefixer?{browsers:["last 2 version", "ie 10"]}!' +
  'sass?outputStyle=expanded');

const dynamicPluginLoader = process.env.NODE_ENV !== 'production' ? [
  new webpack.NoErrorsPlugin()
] : [
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('app.css')
];

module.exports = {
  entry: {
    app: path.resolve(dirSrc, 'app.js')
  },
  output: {
    path: dirDist,
    filename: '[name].js'
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
        loader: dynamicCssLoader
      }
    ]
  },
  plugins: dynamicPluginLoader,
  stats: {
    // Nice colored output
    colors: true
  },
  // Create source maps for the bundle
  devtool: 'source-map'
};
