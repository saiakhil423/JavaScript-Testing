import { describe, it, expect } from 'vitest';
import { getCoupons,calculateDiscount, validateUserInput } from '../src/core';

describe('getCoupons', () => {
  it('should return array of coupons with code and discount', () => {
    const coupons = getCoupons();
    expect(coupons).toHaveLength(2);
    expect(coupons[0]).toEqual({ code: 'SAVE20NOW', discount: 0.2 });
    expect(coupons[1]).toEqual({ code: 'DISCOUNT50OFF', discount: 0.5 });
  });
});

describe('calculateDiscount', () => {
  it('should apply SAVE10 discount', () => {
    expect(calculateDiscount(100, 'SAVE10')).toBe(90);
  });

  it('should apply SAVE20 discount', () => {
    expect(calculateDiscount(200, 'SAVE20')).toBe(160);
  });

  it('should return original price for unknown code', () => {
    expect(calculateDiscount(100, 'INVALID')).toBe(100);
  });

  it('should return error for invalid price', () => {
    expect(calculateDiscount(-10, 'SAVE10')).toBe('Invalid price');
  });

  it('should return error for non-string code', () => {
    expect(calculateDiscount(100, 123)).toBe('Invalid discount code');
  });
});


describe('validateUserInput',()=>{
    it('should pass for valid input',()=>{
        expect(validateUserInput('Johnnnn',20)).toBe('Validation successful')
    })
    it('should return both errors', () => {
    expect(validateUserInput('Al', 12)).toBe('Invalid username, Invalid age');
  });
})