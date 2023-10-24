// isRegex.test.ts
import isRegex from "../../src/utils/isRegex";

test("isRegex returns true for regular expressions", () => {
  expect(isRegex(/hello/)).toBe(true);
});

test("isRegex returns false for non-regular expressions", () => {
  expect(isRegex(null)).toBe(false);
  expect(isRegex(undefined)).toBe(false);
  expect(isRegex("hello")).toBe(false);
  expect(isRegex({})).toBe(false);
  expect(isRegex([])).toBe(false);
  expect(isRegex(10)).toBe(false);
  expect(isRegex(true)).toBe(false);
  expect(isRegex(() => {})).toBe(false);
  expect(isRegex(new Date())).toBe(false);
});
