// isElement.test.ts
import isElement from "./isElement";

test("isElement returns true for element nodes", () => {
  expect(isElement(document.querySelector("div"))).toBe(true);
});

test("isElement returns false for non-element nodes", () => {
  expect(isElement(null)).toBe(false);
  expect(isElement(undefined)).toBe(false);
  expect(isElement(10)).toBe(false);
  expect(isElement("hello")).toBe(false);
  expect(isElement({})).toBe(false);
  expect(isElement([])).toBe(false);
  expect(isElement(new Date())).toBe(false);
});
