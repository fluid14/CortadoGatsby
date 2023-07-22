import React from 'react';
import * as styles from './Satisfaction.module.scss';
import cs from 'classnames';

const Satisfaction = () => {
  return (
    <section className={cs('section', styles.satisfactionWrap)}>
      <h3 className={styles.text}>W bonusie: zadowolenie współpracowników gwarantowane!</h3>
    </section>
  );
};

export default Satisfaction;
