// Configuration data that is shared between builds

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const paths = require('./paths')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
  ],
  resolve: {
    extensions: [ '.js', '.jsx' ],
    modules: [ 'node_modules' ],
    alias: {
      // Add aliases to files in order to shorten relative paths
      components: path.resolve(paths.appSrc, 'components'),
      pages: path.resolve(paths.appSrc, 'pages'),
      utils: path.resolve(paths.appSrc, 'utils'),
      shared: path.resolve(paths.appSrc, 'shared'),
      'react-dom': '@hot-loader/react-dom',
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg)$/,
        use: [ 'file-loader' ],
      },
      {
        test: /\.html$/i,
        use: [ 'html-loader' ],
      },
    ],
  },
}
