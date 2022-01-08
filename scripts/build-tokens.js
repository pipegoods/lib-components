'use strict'
exports.__esModule = true
// eslint-disable-next-line
var tokens_1 = require("../tokens/tokens");
// eslint-disable-next-line
var fs = require('fs');
var ToKebabCase = function (str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}
function isIObjectKeys(object) {
  return typeof object === 'object'
}
var transformTokens = function (parentKey, object) {
  var objectKeys = Object.keys(object)
  return objectKeys.reduce((tokensTransformed, objectKey) => {
    var value = object[objectKey]
    if (isIObjectKeys(value)) {
      var customProperty =
        parentKey !== ''
          ? ''.concat(parentKey, '-').concat(ToKebabCase(objectKey))
          : ''.concat(ToKebabCase(objectKey))
      return ''
        .concat(tokensTransformed)
        .concat(transformTokens(customProperty, value))
    }
    return ''
      .concat(tokensTransformed, '\n        --')
      .concat(parentKey, '-')
      .concat(ToKebabCase(objectKey), ': ')
      .concat(value, ';')
  }, '')
}
var BuildTokens = function () {
  var customProperties = ''
    .concat(transformTokens('', tokens_1.choices))
    .concat(transformTokens('', tokens_1.decisions))
  var data = ':root {'.concat(customProperties, '}')
  fs.writeFile('./styles/tokens.css', data, 'utf8', (error) => {
    if (error) {
      return console.log(error)
    }
    console.log('The file was saved!')
  })
}
BuildTokens()
