// isArray.test.ts
import isArray from "../../src/utils/isArray";

test("isArray returns true for arrays", () => {
  expect(isArray([])).toBe(true);
  expect(isArray([1, 2, 3])).toBe(true);
});

test("isArray returns false for non-arrays", () => {
  expect(isArray(null)).toBe(false);
  expect(isArray(undefined)).toBe(false);
  expect(isArray("hello")).toBe(false);
  expect(isArray({})).toBe(false);
  expect(isArray(10)).toBe(false);
  expect(isArray(true)).toBe(false);
  expect(isArray(() => {})).toBe(false);
  expect(isArray(new Date())).toBe(false);
});