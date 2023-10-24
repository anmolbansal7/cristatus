const toRawTypeCode = `import { toRawType } from '@cristatus/utils';

// Get the raw type of a string.
const rawType = toRawType("hello"); // "string"

// Get the raw type of a number.
const rawType = toRawType(123); // "number"

// Get the raw type of an object.
const rawType = toRawType({}); // "object"
`;

export default toRawTypeCode;
