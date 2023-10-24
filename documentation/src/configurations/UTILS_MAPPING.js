import UtilsUi from '../components/UtilsUi';
import camelCaseCode from '../components/UtilsUi/snippets/camelCaseCode';
import isArrayCode from '../components/UtilsUi/snippets/isArrayCode';
import isBooleanCode from '../components/UtilsUi/snippets/isBooleanCode';
import isBrowserCode from '../components/UtilsUi/snippets/isBrowserCode';
import isDateCode from '../components/UtilsUi/snippets/isDateCode';
import isDateObjectCode from '../components/UtilsUi/snippets/isDateObjectCode';
import isEmptyCode from '../components/UtilsUi/snippets/isEmptyCode';
import isEqualCode from '../components/UtilsUi/snippets/isEqualCode';
import isFunctionCode from '../components/UtilsUi/snippets/isFunctionCode';
import isNumberCode from '../components/UtilsUi/snippets/isNumberCode';
import isObjectCode from '../components/UtilsUi/snippets/isObjectCode';
import isRegexCode from '../components/UtilsUi/snippets/isRegexCode';
import isStringCode from '../components/UtilsUi/snippets/isStringCode';
import kebabCaseCode from '../components/UtilsUi/snippets/kebabCaseCode';
import prefersDarkModeCode from '../components/UtilsUi/snippets/prefersDarkModeCode';
import snakeCaseCode from '../components/UtilsUi/snippets/snakeCaseCode';
import startCaseCode from '../components/UtilsUi/snippets/startCaseCode';
import toRawTypeCode from '../components/UtilsUi/snippets/toRawTypeCode';

const UTILS_MAPPING = [
  {
    key: 'camelCase',
    label: 'camelCase',
    description: 'Converts a string to camel case. Camel case is a style of capitalization in which the first letter of each word in a string is capitalized, except for the first letter of the string, which is lowercase.',
    code: camelCaseCode,
    component: UtilsUi,
  },
  {
    key: 'isArray',
    label: 'isArray',
    description: 'Checks if the given value is an array.',
    code: isArrayCode,
    component: UtilsUi,
  },
  {
    key: 'isBoolean',
    label: 'isBoolean',
    description: 'Checks if the given value is a boolean.',
    code: isBooleanCode,
    component: UtilsUi,
  },
  {
    key: 'isBrowser',
    label: 'isBrowser',
    description: 'Checks if the current environment is a browser.',
    code: isBrowserCode,
    component: UtilsUi,
  },
  {
    key: 'isDate',
    label: 'isDate',
    description: 'Checks if the given value is a date.',
    code: isDateCode,
    component: UtilsUi,
  },
  {
    key: 'isDateObject',
    label: 'isDateObject',
    description: 'Checks if the given value is a Date object.',
    code: isDateObjectCode,
    component: UtilsUi,
  },
  {
    key: 'isEmpty',
    label: 'isEmpty',
    description: 'Checks if a value is empty. Checks null, undefined, NaN, Strings, Arrays, Objects, Maps, Sets',
    code: isEmptyCode,
    component: UtilsUi,
  },
  {
    key: 'isEqual',
    label: 'isEqual',
    description: 'Checks if two values are equal.',
    code: isEqualCode,
    component: UtilsUi,
  },
  {
    key: 'isFunction',
    label: 'isFunction',
    description: 'Checks if the given value is a function.',
    code: isFunctionCode,
    component: UtilsUi,
  },
  {
    key: 'isNumber',
    label: 'isNumber',
    description: 'Checks if the given value is a number.',
    code: isNumberCode,
    component: UtilsUi,
  },
  {
    key: 'isObject',
    label: 'isObject',
    description: 'Checks if the given value is an object.',
    code: isObjectCode,
    component: UtilsUi,
  },
  {
    key: 'isRegex',
    label: 'isRegex',
    description: 'Checks if the given value is a regular expression.',
    code: isRegexCode,
    component: UtilsUi,
  },
  {
    key: 'isString',
    label: 'isString',
    description: 'Checks if the given value is a string.',
    code: isStringCode,
    component: UtilsUi,
  },
  {
    key: 'kebabCase',
    label: 'kebabCase',
    description: 'Converts a string to kebab case. Kebab case is a style of capitalization in which all of the letters in a string are lowercase and separated by hyphens.',
    code: kebabCaseCode,
    component: UtilsUi,
  },
  {
    key: 'prefersDarkMode',
    label: 'prefersDarkMode',
    description: 'Returns a boolean value indicating whether the users device prefers dark mode.',
    code: prefersDarkModeCode,
    component: UtilsUi,
  },
  {
    key: 'snakeCase',
    label: 'snakeCase',
    description: 'Converts a string to snake case. Snake case is a style of capitalization in which all of the letters in a string are lowercase and separated by underscores.',
    code: snakeCaseCode,
    component: UtilsUi,
  },
  {
    key: 'startCase',
    label: 'startCase',
    description: 'Converts a string to start case. Start case is a style of capitalization in which the first letter of each word in a string is capitalized.',
    code: startCaseCode,
    component: UtilsUi,
  },
  {
    key: 'toRawType',
    label: 'toRawType',
    description: 'Returns the raw type of a value.',
    code: toRawTypeCode,
    component: UtilsUi,
  },
];

export default UTILS_MAPPING;
