// isDateObject.test.ts
import isDateObject from "../../src/utils/isDateObject";

test("isDateObject returns true for Date objects", () => {
  expect(isDateObject(new Date())).toBe(true);
});

test("isDateObject returns false for non-Date objects", () => {
  expect(isDateObject(null)).toBe(false);
  expect(isDateObject(undefined)).toBe(false);
  expect(isDateObject("hello")).toBe(false);
  expect(isDateObject({})).toBe(false);
  expect(isDateObject([])).toBe(false);
  expect(isDateObject(10)).toBe(false);
  expect(isDateObject(true)).toBe(false);
  expect(isDateObject(() => {})).toBe(false);
});
