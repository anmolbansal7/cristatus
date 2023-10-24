import UtilsUi from '../components/UtilsUi';
import isEmptyCode from '../components/UtilsUi/snippets/isEmptyCode';
import toRawTypeCode from '../components/UtilsUi/snippets/toRawType';

const UTILS_MAPPING = [
  {
    key: 'isEmpty',
    label: 'isEmpty',
    description: 'Checks if a value is empty. Checks null, undefined, NaN, Strings, Arrays, Objects, Maps, Sets',
    code: isEmptyCode,
    component: UtilsUi,
  },
  {
    key: 'toRawType',
    label: 'toRawType',
    description: 'Returns the raw type of a value',
    code: toRawTypeCode,
    component: UtilsUi,
  },
];

export default UTILS_MAPPING;
