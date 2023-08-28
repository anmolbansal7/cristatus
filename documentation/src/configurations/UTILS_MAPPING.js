import UtilsUi from '../components/UtilsUi';
import isEmptyCode from '../components/UtilsUi/snippets/isEmptyCode';
import prefersDarkModeCode from '../components/UtilsUi/snippets/prefersDarkModeCode';

const UTILS_MAPPING = [
  {
    key: 'isEmpty',
    label: 'isEmpty',
    description: 'is Empty Description is here for testing something something',
    code: isEmptyCode,
    component: UtilsUi,
  },
  {
    key: 'prefersDarkMode',
    label: 'prefersDarkMode',
    description: 'Returns a Boolean value based on the system preference of theme. If Dark Mode is preferred it returns TRUE',
    code: prefersDarkModeCode,
    component: UtilsUi,
  },
];

export default UTILS_MAPPING;
