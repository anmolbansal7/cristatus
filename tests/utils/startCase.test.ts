
// startCase.test.ts
import startCase from "../../src/utils/startCase";

test("startCase converts a string with multiple words to start case", () => {
  expect(startCase("this is a string")).toBe(
    "This Is A String"
  );
});

test("startCase converts a string with all lowercase letters to start case", () => {
  expect(startCase("abcdefghi")).toBe(
    "Abcdefghi"
  );
});

test("startCase converts a string with all uppercase letters to start case", () => {
  expect(startCase("ABCDEFGHI")).toBe(
    "ABCDEFGHI"
  );
});

test("startCase returns an empty string if the input string is empty", () => {
  expect(startCase("")).toBe("");
});

test("startCase converts a camelCase to start case", () => {
  expect(startCase("helloWorld")).toBe("Hello World");
});

test("startCase converts a snake_case to start case", () => {
  expect(startCase("hello_world")).toBe("Hello World");
});

test("startCase converts a kebab-case to start case", () => {
  expect(startCase("hello-world")).toBe("Hello World");
});
