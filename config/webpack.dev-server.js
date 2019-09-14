// Dev-server is responsible for running project locally

const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const paths = require('./paths')
const config = require('./webpack.dev.config')
const chalkAnimation = require('chalk-animation')

const PORT = '8000'
const HOST = 'localhost'

const options = {
  host: HOST,
  hot: true,
  overlay: {
    warnings: false,
    errors: true,
  },
  quiet: false,
  noInfo: true, // hide build info in console
  contentBase: paths.appAssets, // serving static files
  watchContentBase: true, // reload page if static files change
  after() {
    chalkAnimation.rainbow(`Its Wednesday my dudes! http://${HOST}:${PORT}\n`, .3)
  }
}

WebpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new WebpackDevServer(compiler, options)

server.listen(PORT, HOST, () => {})
