import { describe, it, expect } from 'vitest';
import { getBookCategory, BookCategory } from './bookCategoryEnum';

describe('Book category classification', () => {
  it('The corresponding description should be returned according to the input book category', () => {
    expect(getBookCategory(BookCategory.Novel)).toBe('Book category: Novel');
  });
});
