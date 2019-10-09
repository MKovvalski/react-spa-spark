// Configuration data related to production only

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const paths = require('./paths')
const commonConfig = require('./webpack.common.config.js')

module.exports = merge(
  commonConfig,
  {
    entry: {
      vendor: ['react'],
      app: paths.appIndexJs,
    },
    mode: 'production',
    output: {
      filename: '[chunkhash]_[name].js',
      path: paths.appBuild,
      publicPath: '/',
    },
    plugins: [
      new UglifyJSPlugin(),

      // DefinePlugin allows to create global constants configurable at compile time
      // Add production url string here if necessary
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
          // SERVICE_URL: JSON.stringify('https://app-api.com/exampleAPIUrl'),
          // EXPERIMENTAL_MODE: JSON.stringify(false),
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(paths.appSrc),
          exclude: /(node_modules)/,
          use: [ 'babel-loader' ]
        },
      ],
    },
  },
)
