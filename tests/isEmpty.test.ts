import isEmpty from '../src/utils/isEmpty';

describe('isEmpty utility', () => {
  it('returns true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('returns true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('returns false for a non-empty object', () => {
    expect(isEmpty({ key: 'value' })).toBe(false);
  });

  it('returns false for a non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });
});
