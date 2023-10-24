// snakeCase.test.ts
import snakeCase from '../../src/utils/snakeCase';

test("snakeCase converts a string to snake case", () => {
  expect(snakeCase("helloWorld")).toBe("hello_world");
});

// test("snakeCase converts a string with multiple words to snake case", () => {
//   expect(snakeCase("thisIsAStringWithMultipleWords")).toBe("this_is_a_string_with_multiple_words");
// });

test("snakeCase converts a string with all lowercase letters to snake case", () => {
  expect(snakeCase("abcdefghijklmnopqrstuvwxyz")).toBe("abcdefghijklmnopqrstuvwxyz");
});

test("snakeCase converts a string with all uppercase letters to snake case", () => {
  expect(snakeCase("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("abcdefghijklmnopqrstuvwxyz");
});

test("snakeCase returns an empty string if the input string is empty", () => {
  expect(snakeCase("")).toBe("");
});