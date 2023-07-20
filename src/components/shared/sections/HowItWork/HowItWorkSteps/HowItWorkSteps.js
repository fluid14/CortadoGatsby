import React from 'react';
import * as styles from './HowItWorkSteps.module.scss';
import HowItWorkStep from '../HowItWorkStep/HowItWorkStep';

import img1 from '../../../../../images/develop/howitwork1.png';
import img2 from '../../../../../images/develop/howitwork3.png';
import img3 from '../../../../../images/develop/howitwork2.png';
import Button from '../../../Button/Button';

const HowItWorkSteps = () => {
  return (
    <div className={styles.howItWorkStepsWrap}>
      <h2 className={styles.title}>Jak to działa?</h2>
      <ul className={styles.steps}>
        <HowItWorkStep img={img1} number="1" title="Kawa" />
        <HowItWorkStep img={img2} number="2" title="Subskrypcja" reverse />
        <HowItWorkStep img={img3} number="3" title="Cos jeszcze" />
      </ul>
      <p className={styles.afterText}>smacznego!</p>
      <Button>Chcę subskrybować</Button>
    </div>
  );
};

export default HowItWorkSteps;
