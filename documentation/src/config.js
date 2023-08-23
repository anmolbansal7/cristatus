import GetStarted from './components/Body/GetStarted';
import ItemDetails from './components/Body/ItemDetails';

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
    items: [
      {
        key: 'toast',
        label: 'Toast',
        component: ItemDetails,
      },
      {
        key: 'banner',
        label: 'Banner',
        component: ItemDetails,
      },
    ],
  },
  {
    type: 'utils',
    label: 'Utils/Functions',
    items: [
      {
        key: 'isEmpty',
        label: 'isEmpty',
        component: ItemDetails,
      },
      {
        key: 'formatDate',
        label: 'formatDate',
        component: ItemDetails,
      },
    ],
  },
];

export default NAVIGATION_MAPPING;
