const path = require('path')
module.exports = {
  entry: {
    'header-bg': './src/header-bg.js',
    'avatar-bg': './src/avatar-bg.js',
    'toc': './src/toc.js'
  },
  output: {
    filename: '[name].main.js',
    path: path.resolve(__dirname, 'source/js')
  }
}