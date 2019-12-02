// var assert = require('assert'); // comes by default with Node
const chai = require('chai')
// const assert = chai.assert
// const expect = chai.expect;

chai.should();


const countVowels = string => {
  let vowels = 0
  for (const char of string) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      vowels++
    }
  }

  return vowels
}

// Domain Specific Language -- DSL

describe('countVowels', () => {
  describe('The kind of return values', () => {
    // IT is a test
    it('Should return a number', () => {
      const result = countVowels("hello my name is nima")
      // assert.typeOf(result, 'number') // TDD
      // expect(result).to.be.a('number');
      result.should.be.a('number');

    })
  })
})


// Async is like npm install during a lecture

