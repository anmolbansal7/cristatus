const omitFromObjectCode = `import { omitFromObject } from '@cristatus/utils';

const initialObject = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

const userWithoutNameAndAge = omitFromObject(initialObject, ["name", "age"]);
/* Result:
{
    email: "john.doe@example.com"
} */
`;

export default omitFromObjectCode;
