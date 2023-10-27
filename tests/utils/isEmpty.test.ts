// isEmpty.test.ts
import isEmpty from '../../src/utils/isEmpty';

test("isEmpty returns true for null", () => {
  expect(isEmpty(null)).toBe(true);
});

test("isEmpty returns true for undefined", () => {
  expect(isEmpty(undefined)).toBe(true);
});

test("isEmpty returns true for NaN", () => {
  expect(isEmpty(NaN)).toBe(true);
});

test("isEmpty returns true for empty strings", () => {
  expect(isEmpty("")).toBe(true);
});

test("isEmpty returns true for empty strings with whitespace", () => {
  expect(isEmpty("     ")).toBe(true);
});

test("isEmpty returns true for empty arrays", () => {
  expect(isEmpty([])).toBe(true);
});

test("isEmpty returns true for empty objects", () => {
  expect(isEmpty({})).toBe(true);
});

test("isEmpty returns true for empty maps", () => {
  expect(isEmpty(new Map())).toBe(true);
});

test("isEmpty returns true for empty sets", () => {
  expect(isEmpty(new Set())).toBe(true);
});

test("isEmpty returns false for non-empty values", () => {
  expect(isEmpty("hello")).toBe(false);
  expect(isEmpty([1, 2, 3])).toBe(false);
  expect(isEmpty({ name: "John Doe" })).toBe(false);
  expect(isEmpty(new Map([[1, "one"]]))).toBe(false);
  expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
});