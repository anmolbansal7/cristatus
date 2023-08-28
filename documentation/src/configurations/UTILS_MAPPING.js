import UtilsUi from '../components/UtilsUi';
import isEmptyCode from '../components/UtilsUi/snippets/isEmptyCode';

const UTILS_MAPPING = [
  {
    key: 'isEmpty',
    label: 'isEmpty',
    description: 'Returns a Boolean value if the given variable is empty. Checks strings, arrays, objects.',
    code: isEmptyCode,
    component: UtilsUi,
  },
];

export default UTILS_MAPPING;
