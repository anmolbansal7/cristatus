import { Element } from 'react-scroll';

import NAVIGATION_MAPPING from '../../configurations/NAVIGATION_MAPPING';
import EmptyState from '../common/EmptyState';
import TOP_NAVIGATION from '../../configurations/TOP_NAVIGATION';

import styles from './styles.module.css';

function Body() {
  return (
    <div className={styles.body}>

      {(TOP_NAVIGATION || []).map((top) => {
        const Component = top.component || EmptyState;
        return (
          <Element
            key={top.key}
            name={top.key}
            className={styles.body_item}
          >
            <Component />
          </Element>
        );
      })}

      {(NAVIGATION_MAPPING || []).map((section) => (
        <div className={styles.body_gap} key={section.type}>
          {section.items.map((item) => {
            const Component = item.component || EmptyState;

            return (
              <Element
                key={item.key}
                name={item.key}
                className={styles.body_item}
              >
                <Component label={item.label} description={item.description} code={item.code} />
              </Element>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Body;
