import toUnique from "../../src/utils/toUnique";

test("toUnique() removes duplicate elements from an array of numbers", () => {
  expect(toUnique([1, 2, 3, 3, 4])).toEqual([1, 2, 3, 4]);
});

test("toUnique() removes duplicate elements from an array of strings", () => {
  expect(toUnique(["hello", "world", "hello", "again"])).toEqual(["hello", "world", "again"]);
});

test("toUnique() returns an empty array if the input array is empty", () => {
  expect(toUnique([])).toEqual([]);
});

// test("toUnique() throws an error if the input array is not an array", () => {
//   expect(() => toUnique(null)).toThrowError("Input array must be an array");
//   expect(() => toUnique(undefined)).toThrowError("Input array must be an array");
// });