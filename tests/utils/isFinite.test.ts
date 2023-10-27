// isFinite.test.ts

import isFinite from "../../src/utils/isFinite";

test("isFinite() returns true for finite numbers", () => {
  expect(isFinite(10)).toBe(true);
  expect(isFinite(-10.5)).toBe(true);
  expect(isFinite(0)).toBe(true);
});

test("isFinite() returns false for non-finite numbers", () => {
  expect(isFinite(Infinity)).toBe(false);
  expect(isFinite(-Infinity)).toBe(false);
  expect(isFinite(NaN)).toBe(false);
});

test("isFinite() returns false for non-number values", () => {
  expect(isFinite("10")).toBe(false);
  expect(isFinite({})).toBe(false);
  expect(isFinite([])).toBe(false);
  expect(isFinite(null)).toBe(false);
  expect(isFinite(undefined)).toBe(false);
});