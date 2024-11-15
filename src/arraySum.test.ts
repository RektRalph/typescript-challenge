import { describe, it, expect } from 'vitest';
import { arraySum } from './arraySum';

describe('Calculation array summary', () => {
  it('When the input array is called [1, 2, 3] Should be passed back 6', () => {
    expect(arraySum([1, 2, 3])).toBe(6);
  });

  it('當輸入的陣列為 [-1, -2, -3] 時，應該回傳 -6', () => {
    expect(arraySum([-1, -2, -3])).toBe(-6);
  });

  it('當輸入的陣列為空陣列時，應該回傳 0', () => {
    expect(arraySum([])).toBe(0);
  });
});

