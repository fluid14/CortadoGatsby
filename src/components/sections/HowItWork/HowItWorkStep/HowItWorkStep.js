import React from 'react';
import * as styles from './HowItWorkStep.module.scss';
import cs from 'classnames';
import Image from '../../../shared/Image/Image';

const HowItWorkStep = ({ reverse, image, number, title, description, backgroundColor }) => {
  return (
    <li className={cs(styles.stepWrap, { [styles.reverse]: reverse })}>
      <div className={styles.imageWrap} style={{ backgroundColor }}>
        <Image className={styles.image} image={image} />
        {number && <p className={styles.number}>{number}</p>}
      </div>
      <div className={styles.descriptionWrap}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

export default HowItWorkStep;
