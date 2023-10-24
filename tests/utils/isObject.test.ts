// isObject.test.ts
import isObject from "../../src/utils/isObject";

test("isObject returns true for objects", () => {
  expect(isObject({})).toBe(true);
  expect(isObject({ foo: "bar" })).toBe(true);
  expect(isObject(new Date())).toBe(true);
});

test("isObject returns false for non-objects", () => {
  expect(isObject(null)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject("hello")).toBe(false);
  expect(isObject(10)).toBe(false);
  expect(isObject(true)).toBe(false);
  expect(isObject(() => {})).toBe(false);
});