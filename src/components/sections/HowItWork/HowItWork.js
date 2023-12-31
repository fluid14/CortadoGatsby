import React from 'react';
import * as styles from './HowItWork.module.scss';
import cs from 'classnames';
import HowItWorkSteps from './HowItWorkSteps/HowItWorkSteps';

const HowItWork = ({ data }) => {
  const {
    title,
    sectionInfo,
    descriptionTitle,
    description: {
      data: { description },
    },
    steps,
    diagramTitle,
    diagramSufix,
    button,
  } = data;

  return (
    <div className={cs('section fullWidth', styles.howItWorkWrap)} id={sectionInfo?.sectionId}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.descriptionWrap}>
        <p className={styles.subTitle}>{descriptionTitle}</p>
        <p className={styles.description}>{description}</p>
      </div>

      <HowItWorkSteps
        className={styles.steps}
        steps={steps}
        diagramTitle={diagramTitle}
        diagramSufix={diagramSufix}
        button={button}
      />
    </div>
  );
};

export default HowItWork;
