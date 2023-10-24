
// isString.test.ts
import isString from "../../src/utils/isString";

test("isString returns true for strings", () => {
  expect(isString("")).toBe(true);
  expect(isString("hello")).toBe(true);
  expect(isString("123")).toBe(true);
});

test("isString returns false for non-strings", () => {
  expect(isString(null)).toBe(false);
  expect(isString(undefined)).toBe(false);
  expect(isString(10)).toBe(false);
  expect(isString({})).toBe(false);
  expect(isString([])).toBe(false);
  expect(isString(true)).toBe(false);
  expect(isString(() => {})).toBe(false);
  expect(isString(new Date())).toBe(false);
});
