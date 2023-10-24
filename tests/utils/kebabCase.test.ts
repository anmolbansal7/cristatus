
// kebabCase.test.ts
import kebabCase from "../../src/utils/kebabCase";

test("kebabCase converts a string to kebab case", () => {
  expect(kebabCase("helloWorld")).toBe("hello-world");
});

test("kebabCase converts a string with multiple words to kebab case", () => {
  expect(kebabCase("thisIsAStringWithMultipleWords")).toBe("this-is-a-string-with-multiple-words");
});

test("kebabCase converts a string with all lowercase letters to kebab case", () => {
  expect(kebabCase("abcdefghijklmnopqrstuvwxyz")).toBe("abcdefghijklmnopqrstuvwxyz");
});

test("kebabCase converts a string with all uppercase letters to kebab case", () => {
  expect(kebabCase("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z");
});

test("kebabCase returns an empty string if the input string is empty", () => {
  expect(kebabCase("")).toBe("");
});

test("kebabCase handles special characters correctly", () => {
  expect(kebabCase("hello_world-foo*bar")).toBe("hello_world-foo*bar");
});