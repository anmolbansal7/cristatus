import { Element } from 'react-scroll';

import NAVIGATION_MAPPING from '../../configurations/NAVIGATION_MAPPING';
import EmptyState from '../common/EmptyState';

import styles from './styles.module.css';

function Body() {
  return (
    <div className={styles.body}>

      {NAVIGATION_MAPPING.map((section) => (

        <div key={section.type}>
          {section.items.map((item) => {
            const Component = item.component || EmptyState;

            return (
              <Element
                key={item.key}
                name={`content-${item.key}`}
                className={styles.body_item}
              >
                <Component label={item.label} description={item.description} code={item.code} />
              </Element>
            );
          })}
        </div>
      ))}

      <div className={styles.body_footer}> Some Footer Content Here</div>
    </div>
  );
}

export default Body;
