import React from 'react';
import * as styles from './Benefit.module.scss';
import Image from '../../../shared/Image/Image';

const Benefit = ({ icon, description }) => {
  return (
    <>
      {icon && (
        <li className={styles.benefitWrap}>
          <Image className={styles.image} image={icon} />
          <p className={styles.text}>{description}</p>
        </li>
      )}
    </>
  );
};

export default Benefit;
