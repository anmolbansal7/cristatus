import getKeyByValue from '../../src/utils/getKeyByValue';

describe('getKeyByValue', () => {
  it('should return the key of the given value', () => {
    const object = {
      name: 'John Doe',
      age: 30,
        occupation: 'Software Engineer',
        object: { key: 'value' },
        array: [1, 2, 3]
    };

    expect(getKeyByValue(object, 'John Doe')).toBe('name');
    expect(getKeyByValue(object, 30)).toBe('age');
    expect(getKeyByValue(object, 'Software Engineer')).toBe('occupation');
    expect(getKeyByValue(object, [1, 2, 3])).toBe('array');
    expect(getKeyByValue(object, { key: 'value' })).toBe('object');
  });

  it('should handle undefined and null values', () => {
    const object = {
      name: 'John Doe',
      age: 30,
      occupation: 'Software Engineer',
    };

    expect(getKeyByValue(object, undefined)).toBeUndefined();
    expect(getKeyByValue(object, null)).toBeUndefined();
  });

  it('should return undefined if the value is not found', () => {
    const object = {
      name: 'John Doe',
      age: 30,
      occupation: 'Software Engineer',
    };

    expect(getKeyByValue(object, 'Foo')).toBeUndefined();
  });
    
    it('should return undefined if object is undefined', () => {
        const object = undefined;

        expect(getKeyByValue(object, 'hello')).toBeUndefined();
    })
});
