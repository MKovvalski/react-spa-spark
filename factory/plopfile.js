const componentGenerator = require('./generators/componentGenerator')

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator)
}
