const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 8008,
    contentBase: './dist',
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
