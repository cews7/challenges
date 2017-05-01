pry = require('pryjs')

function arrayTotal(elements) {
  total = 0
  for (var i = 0; i < elements.length; i++) {
    total += elements[i]
  }
  return total
}

function arrayMean(elements) {
  total = 0
  for (var i = 0; i < elements.length; i++) {
    total += elements[i]
  }
  return total / elements.length
}

module.exports = {arrayTotal, arrayMean}
