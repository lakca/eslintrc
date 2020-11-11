const fixable = require('./fixable')
const other = require('./other')

module.exports = {
  env: {
    'es6': true,
    'node': true,
    'shared-node-browser': true
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: Object.assign({}, fixable, other)
}
