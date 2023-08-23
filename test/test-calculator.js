const { expect } = require('chai');
const Calculator = require('../src/Calculator');

describe('Calculator Tests', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    it('should correctly add two numbers', () => {
        const result = calculator.add(2, 3);
        expect(result).to.equal(5);
    });

    it('should correctly subtract two numbers', () => {
        const result = calculator.subtract(5, 3);
        expect(result).to.equal(2);
    });
});
