import GetStarted from '../components/GetStarted';

import COMPONENT_MAPPING from './COMPONENT_MAPPING';
import UTILS_MAPPING from './UTILS_MAPPING';

const NAVIGATION_MAPPING = [
  {
    type: 'top',
    items: [
      {
        key: 'get_started',
        label: 'Get Started',
        component: GetStarted,
      },
    ],
  },
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
