var path = require('path');
var webpack = require('webpack');
var basic = require('./webpack.config');

pro = Object.assign(basic,{
  entry:'./index.js',
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ]
});

module.exports = pro;