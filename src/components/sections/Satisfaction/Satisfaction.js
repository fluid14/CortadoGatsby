import React from 'react';
import * as styles from './Satisfaction.module.scss';
import cs from 'classnames';
import leafImage from '../../../images/leaf.svg';
import sunImage from '../../../images/sun.svg';

const Satisfaction = () => {
  return (
    <section className={cs('section fullWidth', styles.satisfactionWrap)}>
      <h3 className={styles.text}>
        <span className={styles.title}>W bonusie:</span> zadowolenie współpracowników gwarantowane!
      </h3>

      <img className={styles.imageSun} src={sunImage} alt="Słońce" />
      <img className={styles.imageLeaf} src={leafImage} alt="Liść" />
    </section>
  );
};

export default Satisfaction;
