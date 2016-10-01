const webpack = require('webpack'); // eslint-disable-line no-unused-vars

var webpackEnv = {}; // eslint-disable-line no-var

if (process.env.NODE_ENV === 'production') {
  webpackEnv = require('./webpack.production');
} else {
  webpackEnv = require('./webpack.development');
}

module.exports = webpackEnv;
