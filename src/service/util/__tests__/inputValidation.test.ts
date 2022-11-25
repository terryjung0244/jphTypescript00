// import { calculatorSum } from 'service/util/calculator';

// describe('src/service/util/calculator', () => {
//   it('should return sum value', () => {
//     const value = calculatorSum(1, 2);
//     expect(value).toBe(3);
//   });
// });

import { inputValidation } from 'service/util/inputValidation';

describe('service/util/inputValidation', () => {
  it("Should return 'true'", () => {
    const value = inputValidation({
      name: 'tempName',
      age: 'tempAge',
    });
    expect(value).toBe(true);
  });
});
