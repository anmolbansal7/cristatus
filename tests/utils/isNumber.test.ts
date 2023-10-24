
// isNumber.test.ts
import isNumber from "../../src/utils/isNumber";

test("isNumber returns true for numbers", () => {
  expect(isNumber(10)).toBe(true);
  expect(isNumber(-10)).toBe(true);
  expect(isNumber(0.5)).toBe(true);
  expect(isNumber(Infinity)).toBe(true);
  expect(isNumber(-Infinity)).toBe(true);
});

test("isNumber returns false for non-numbers", () => {
  expect(isNumber(null)).toBe(false);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber("hello")).toBe(false);
  expect(isNumber({})).toBe(false);
  expect(isNumber([])).toBe(false);
});
