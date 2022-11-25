// import react from 'react';
import { calculatorMultiply, calculatorSum } from 'service/util/calculator';

describe('src/service/util/calculator', () => {
  it('should return sum value', () => {
    const value = calculatorSum(1, 2);
    expect(value).toBe(3);
  });
  it('should return multiplyby5', () => {
    expect(calculatorMultiply(3)).toBe(15);
  });
});
