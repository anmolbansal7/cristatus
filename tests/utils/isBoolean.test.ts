// isBoolean.test.ts
import isBoolean from "../../src/utils/isBoolean";

test("isBoolean returns true for booleans", () => {
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);
});

test("isBoolean returns false for non-booleans", () => {
  expect(isBoolean(null)).toBe(false);
  expect(isBoolean(undefined)).toBe(false);
  expect(isBoolean("hello")).toBe(false);
  expect(isBoolean({})).toBe(false);
  expect(isBoolean([])).toBe(false);
  expect(isBoolean(10)).toBe(false);
  expect(isBoolean(() => {})).toBe(false);
  expect(isBoolean(new Date())).toBe(false);
});
