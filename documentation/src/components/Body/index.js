import { Element } from 'react-scroll';

import NAVIGATION_MAPPING from '../../config';

import styles from './styles.module.css';

function Body() {
  return (
    <div className={styles.body}>
      {NAVIGATION_MAPPING.map((section) => (
        <div key={section.type}>
          {section.items.map((item) => {
            const Component = item.component;
            return (
              <Element
                name={`content-${item.key}`}
                key={item.key}
              >
                <Component label={item.label} />
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
