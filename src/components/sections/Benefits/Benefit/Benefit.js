import React from 'react';
import * as styles from './Benefit.module.scss';

const Benefit = ({ img, imgAlt = '', description }) => {
  return (
    <li className={styles.benefitWrap}>
      <img className={styles.image} src={img} alt={imgAlt} />
      <p className={styles.text}>{description}</p>
    </li>
  );
};

export default Benefit;
