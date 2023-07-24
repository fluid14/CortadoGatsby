import React from 'react';
import * as styles from './HowItWorkStep.module.scss';
import cs from 'classnames';

const HowItWorkStep = ({ reverse, img, number, title, description }) => {
  return (
    <li className={cs(styles.stepWrap, { [styles.reverse]: reverse })}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={img} alt="Step" />
        {number && <p className={styles.number}>{number}</p>}
      </div>
      <div className={styles.descriptionWrap}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>
          nie musisz już pamiętać o obowiązkach związanych z zakupem kawy.
        </p>
      </div>
    </li>
  );
};

export default HowItWorkStep;
