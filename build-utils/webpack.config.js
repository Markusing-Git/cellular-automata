const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

module.exports = ({ env }) => {
  const envConfig = {
    dev: devConfig,
    prod: prodConfig,
  }[env];

  if (typeof envConfig === 'undefined') {
    console.error(`Unknown environment: ${env}`);
    process.exit(1);
  }

  return merge(commonConfig, envConfig);
};
