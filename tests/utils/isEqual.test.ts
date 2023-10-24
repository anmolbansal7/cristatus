// isEqual.test.ts
import isEqual from "../../src/utils/isEqual";

test("isEqual returns true for equal values", () => {
  expect(isEqual(1, 1)).toBe(true);
  expect(isEqual("hello", "hello")).toBe(true);
  expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  expect(isEqual({ foo: 1, bar: 2 }, { foo: 1, bar: 2 })).toBe(true);
});

test("isEqual returns false for non-equal values", () => {
  expect(isEqual(1, 2)).toBe(false);
  expect(isEqual("hello", "world")).toBe(false);
  expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
  expect(isEqual({ foo: 1, bar: 2 }, { foo: 1, bar: 3 })).toBe(false);
});