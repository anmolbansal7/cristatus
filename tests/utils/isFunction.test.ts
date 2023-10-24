// isFunction.test.ts
import isFunction from "./isFunction";

test("isFunction returns true for functions", () => {
  expect(isFunction(() => {})).toBe(true);
});

test("isFunction returns false for non-functions", () => {
  expect(isFunction(null)).toBe(false);
  expect(isFunction(undefined)).toBe(false);
  expect(isFunction("hello")).toBe(false);
  expect(isFunction({})).toBe(false);
  expect(isFunction([])).toBe(false);
  expect(isFunction(10)).toBe(false);
  expect(isFunction(true)).toBe(false);
  expect(isFunction(new Date())).toBe(false);
});
