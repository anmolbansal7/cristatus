/**
 * @name omitFromObject
 * @description Removes the specified properties from an object.
 * @param object The object to remove properties from.
 * @param properties The properties to remove.
 * @returns A new object without the specified properties, or the original input if it's not an object, null, or undefined.
 *
 * @example
 * //Remove the `name` and `age` properties from an object.
 * const userWithoutNameAndAge = omitFromObject({ name: "John Doe", age: 30, email: "john.doe@example.com" }, ["name", "age"]); // { email: "john.doe@example.com" }
 */

import toRawType from "./toRawType";

function omitFromObject(object: unknown, properties:unknown): object {
  if (toRawType(object) !== 'object' || toRawType(properties) !== 'array') {
    return object || {};
  }

  const omittedProperties: object = { ...(object || {}) };

  (properties as Array<string>).forEach((property) => {
    if (toRawType(property) === 'string' && property in omittedProperties) {
      delete omittedProperties[property];
    }
  });

  return omittedProperties;
}

export default omitFromObject;
