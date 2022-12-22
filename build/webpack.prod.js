const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: 'node_modules',
        parallel: true,
        minify: TerserWebpackPlugin.swcMinify,
        extractComments: false,
        terserOptions: {
          compress: { drop_console: true, drop_debugger: true },
        },
      }),
      new CssMinimizerPlugin({
        parallel: true,
        minify: CssMinimizerPlugin.swcMinify,
      }),
    ],
  },
};
