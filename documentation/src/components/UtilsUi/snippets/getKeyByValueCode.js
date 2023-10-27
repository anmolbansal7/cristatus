const getKeyByValueCode = `import { getKeyByValue } from '@cristatus/utils';

const object = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
};

const key = getKeyByValue(object, "John Doe"); // "name"
`;

export default getKeyByValueCode;
