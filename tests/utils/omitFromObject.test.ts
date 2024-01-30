// // omit.test.ts

// import omitFromObject from "../../src/utils/omitFromObject";

// test("omitFromObject() removes the specified properties from an object", () => {
//   expect(omitFromObject({ name: "John Doe", age: 30 }, ["name", "age"])).toEqual({ email: "john.doe@example.com" });
// });

// test("omitFromObject() removes the specified properties from an object", () => {
//   expect(omitFromObject(
//   {
//     name: "John Doe",
//     age: 30,
//     items: { nickname: 'john' },
//     array: ['hello']
//   },
//   ["name", "age", 'array'])).toEqual({ email: "john.doe@example.com" });
// });

// // test("omitFromObject() throws an error if the input object is not an object", () => {
// //   expect(() => omitFromObject(null, [])).toThrowError("Input object must be an object");
// //   expect(() => omitFromObject(undefined, [])).toThrowError("Input object must be an object");
// // });

// test("omitFromObject() throws an error if the properties are not an array of strings", () => {
//   expect(() => omitFromObject({ name: "John Doe", age: 30 }, [1])).toThrowError("Properties must be an array of strings");
// });

// test("omitFromObject() returns an empty object if the input object is empty", () => {
//   expect(omitFromObject({}, [])).toEqual({});
// });

test("", () => {});