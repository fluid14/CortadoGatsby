import React from 'react';
import * as styles from './HowItWorkSteps.module.scss';
import HowItWorkStep from '../HowItWorkStep/HowItWorkStep';
import cs from 'classnames';
import Button from '../../../shared/Button/Button';

const HowItWorkSteps = ({
  className = '',
  steps,
  diagramSufix,
  diagramTitle,
  button: { secondary: buttonSecondary, text: buttonText, url: buttonUrl, size: buttonSize },
}) => {
  return (
    <div className={cs(className, styles.howItWorkStepsWrap)}>
      <h2 className={styles.title}>{diagramTitle}</h2>
      <ul className={styles.steps}>
        {steps.length &&
          steps.map(
            ({ title, description, number, strapi_id: id, image, backgroundColor }, index) => (
              <HowItWorkStep
                key={id}
                image={image}
                number={number}
                title={title}
                description={description}
                reverse={index % 2}
                backgroundColor={backgroundColor}
              />
            )
          )}
      </ul>
      <p className={styles.afterText}>{diagramSufix}</p>
      <Button to={buttonUrl} type="link" secondary={buttonSecondary} size={buttonSize}>
        {buttonText}
      </Button>
    </div>
  );
};

export default HowItWorkSteps;
