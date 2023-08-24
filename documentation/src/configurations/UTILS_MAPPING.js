import UtilsUi from '../components/UtilsUi';
import formatDateCode from '../components/UtilsUi/snippets/formatDateCode';
import isEmptyCode from '../components/UtilsUi/snippets/isEmptyCode';

const UTILS_MAPPING = [
  {
    key: 'isEmpty',
    label: 'isEmpty',
    description: 'is Empty Description is here for testing something something',
    code: isEmptyCode,
    component: UtilsUi,
  },
  {
    key: 'formatDate',
    label: 'formatDate',
    description: 'formatDate Description is here for testing something',
    code: formatDateCode,
    component: UtilsUi,
  },
];

export default UTILS_MAPPING;
