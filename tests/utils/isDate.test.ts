// isDate.test.ts
import isDate from "../../src/utils/isDate";

test("isDate returns true for dates", () => {
  expect(isDate(new Date())).toBe(true);
});

test("isDate returns false for non-dates", () => {
  expect(isDate(null)).toBe(false);
  expect(isDate(undefined)).toBe(false);
  expect(isDate("hello")).toBe(false);
  expect(isDate({})).toBe(false);
  expect(isDate([])).toBe(false);
  expect(isDate(10)).toBe(false);
  expect(isDate(true)).toBe(false);
  expect(isDate(() => {})).toBe(false);
});
