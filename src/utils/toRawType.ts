/**
 * @name toRawType
 * @description Returns the raw type of a value.
 * @param value The value to get the raw type of.
 * @returns The raw type of the value, as a string.
 *
 * The raw type of a value is the type of the value as determined by the JavaScript engine. This is in contrast to the TypeScript type of a value, which is the type that is assigned to the value by the TypeScript compiler.
 *
 * Some examples of raw types include:
 *
 * * "object"
 * * "string"
 * * "number"
 * * "boolean"
 * * "function"
 * * "undefined"
 * * "null"
 *
 * @example
 * // Get the raw type of a string.
 * const rawType = toRawType("hello"); // "string"
 *
 * // Get the raw type of a number.
 * const rawType = toRawType(123); // "number"
 *
 * // Get the raw type of an object.
 * const rawType = toRawType({}); // "object"
 */

function toRawType(value: unknown): string {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

export default toRawType;
