// camelCase.test.ts
import camelCase from "../../src/utils/camelCase";

test("camelCase converts a string to camel case", () => {
  expect(camelCase("hello, world!")).toBe("helloWorld");
});

test("camelCase converts a string with multiple words to camel case", () => {
  expect(camelCase("this is a string with multiple words")).toBe("thisIsAStringWithMultipleWords");
});

test("camelCase converts a string with all lowercase letters to camel case", () => {
  expect(camelCase("abcdefghijklmnopqrstuvwxyz")).toBe("abcdefghijklmnopqrstuvwxyz");
});

test("camelCase converts a string with all uppercase letters to camel case", () => {
  expect(camelCase("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("aBCDEFGHIJKLMNOPQRSTUVWXYZ");
});

test("camelCase returns an empty string if the input string is empty", () => {
  expect(camelCase("")).toBe("");
});
