// test.js
const assert = require('chai').assert;
const addition = require('../src/maths.js');

describe('Math', function() {
  describe('addition', function() {
    it('devrait retourner la somme de deux nombres', function() {
      const resultat = addition(2, 3);
      assert.equal(resultat, 5);
    });
  });
});
