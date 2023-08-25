import COMPONENT_MAPPING from './COMPONENT_MAPPING';
import UTILS_MAPPING from './UTILS_MAPPING';

const NAVIGATION_MAPPING = [
  {
    type: 'component',
    label: 'Components',
    items: COMPONENT_MAPPING || [],
  },
  {
    type: 'utils',
    label: 'Utils/Functions',
    items: UTILS_MAPPING || [],
  },
];

export default NAVIGATION_MAPPING;
