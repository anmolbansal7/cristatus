const pickFromObjectCode = `import { pickFromObject } from '@cristatus/utils';

const initialObject = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

const userWithOnlyNameAndAge = pickFromObject(initialObject, ["name", "age"]);
/* Result:
{
    name: "John Doe",
    age: 30,
} /*
`;

export default pickFromObjectCode;
