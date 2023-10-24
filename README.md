# Cristatus

This JavaScript library, built on top of TypeScript, is designed to simplify working with arrays, objects, strings, numbers and dates. Let's get started with using Cristatus in your projects.

### Installation
To start using Cristatus, install the main library package:

```
# Using npm 
npm install @cristatus/utils

# Using yarn
yarn add @cristatus/utils

# Using pnpm
pnpm install @cristatus/utils
```
### Importing and Usage
Once installed, you can import Cristatus utilities into your project. Here are some examples of how to use them:

```
// Import Cristatus Utilities
import { isEmpty } from '@cristatus/utils';

// Use isEmpty function
const isArrayEmpty = isEmpty([1, 2, 3]); // false
```

#### For detailed information about all available utility functions, refer to our [Documentation](https://cristatus.com/)

### Steps to Run

- Clone the Repository
- ```pnpm run install-package``` (to install npm package deps)
- ```pnpm run lint-package``` (for eslint and stylelint in package)
- ```pnpm run test-package``` (for tests, eslint and stylelint in package)
- ```pnpm run test``` (for tests in package)
- ```pnpm run build``` (to build npm package)
- ```pnpm run install-docs``` (to install deps for documentation website)
- ```pnpm run start-docs``` (to start localhost:3000 for documentation website)

### Open Source Community and Support
Here, you can actively participate by opening issues to discuss various topics, asking questions to seek help, and sharing your valuable experiences.

We encourage you to make a positive impact by **contributing to this repository through Pull Requests (PRs)**. Your PRs can include **bug fixes, new utilities, or enhancements** that align with the project's goals. Together, we can collaborate to improve and innovate.

Join us in shaping the future of this project by engaging in meaningful discussions, raising issues, and submitting PRs. Your involvement makes all the difference!

**Contributions are always welcome!**

**See `contributing.md` for ways to get started.**

Please adhere to this project's `code of conduct`.

### List of all the Utils

| Name | Description | Contributor | Status |
| ---- | ----------- | ----------- | ------ |
| camelCase | Converts a string to camel case. | [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| isArray | Checks if the given value is an array. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| isBoolean | Checks if the given value is a boolean. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| isBrowser | Checks if the current environment is a browser. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| isDate | Checks if the given value is a date. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| isDateObject | Checks if the given value is a Date object. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| isEmpty | Checks if a value is empty. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| isEqual | Checks if two values are equal. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| isFunction | Checks if the given value is a function. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| isNumber | Checks if the given value is a number. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| isObject | Checks if the given value is an object. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| isRegex | Checks if the given value is a regular expression. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| isString | Checks if the given value is a string. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| kebabCase | Converts a string to kebab case. |  [@anmolbansal7](https://github.com/anmolbansal7) | 1 test case fail |
| prefersDarkMode | Returns a boolean value indicating whether the user's device prefers dark mode. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| snakeCase | Converts a string to snake case. |  [@anmolbansal7](https://github.com/anmolbansal7) | 1 test case fail |
| startCase | Converts string to Start Case. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
| toRawType | Returns the raw type of a value. |  [@anmolbansal7](https://github.com/anmolbansal7) | Stable |
