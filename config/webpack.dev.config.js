// Configuration data related to development only

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const paths = require('./paths')
const commonConfig = require('./webpack.common.config.js')

module.exports = merge(
  commonConfig,
  {
    entry: [ paths.appIndexJs ],
    mode: 'development',
    devtool: 'eval', // fastest mode for development
    plugins: [
      new webpack.SourceMapDevToolPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),

      // DefinePlugin allows to create global constants configurable at compile time
      // Add development url string here if necessary
      // Lock experimental flag unlock experimental features
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
          // SERVICE_URL: JSON.stringify('localhost:3000/exampleAPIUrl'),
          // EXPERIMENTAL_MODE: JSON.stringify(true),
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(paths.appSrc),
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [ '@babel/react' ],
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          include: [ path.resolve(paths.appSrc, 'styles') ],
          use: [ 'style-loader', 'css-loader', 'sass-loader' ],
        },
      ],
    },
  },
)