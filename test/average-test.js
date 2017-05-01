const assert = require('chai').assert
const {arrayTotal, arrayMean} = require('../lib/average')

describe('return handrolled array methods', function() {
  it('give total', function() {
    var array = [1,2,2]
    assert.equal(arrayTotal(array), 5);
  })

  it('give mean', function() {
    var array = [2,2,2]
    assert.equal(arrayMean(array), 2);
  })
})
