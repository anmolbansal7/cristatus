
// toRawType.test.ts
import toRawType from "../../src/utils/toRawType";

test("toRawType returns 'object' for objects", () => {
  expect(toRawType({})).toBe("object");
});

test("toRawType returns 'string' for strings", () => {
  expect(toRawType("hello")).toBe("string");
});

test("toRawType returns 'number' for numbers", () => {
  expect(toRawType(123)).toBe("number");
});

test("toRawType returns 'boolean' for booleans", () => {
  expect(toRawType(true)).toBe("boolean");
});

test("toRawType returns 'function' for functions", () => {
  expect(toRawType(() => {
    // Do nothing
  })).toBe("function");
});

test("toRawType returns 'undefined' for undefined", () => {
  expect(toRawType(undefined)).toBe("undefined");
});

test("toRawType returns 'null' for null", () => {
  expect(toRawType(null)).toBe("null");
});
