// Listing of path variables used in Webpack configs and server files

const path = require("path")
const fs = require("fs")

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  appAssets: resolveApp("src/assets"),
  appBuild: resolveApp("build"),
  appConfig: resolveApp("config"),
  appHtml: resolveApp("src/index.html"),
  appIndexJs: resolveApp("src/index.js"),
  appSrc: resolveApp("src")
}
