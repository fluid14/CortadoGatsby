import React from 'react';
import * as styles from './Benefits.module.scss';
import cs from 'classnames';
import Button from '../../shared/Button/Button';
import Benefit from './Benefit/Benefit';

const Benefits = ({ data: { text, title, benefits, button } }) => {
  return (
    <section className={cs('section fullWidth', styles.benefitsWrap)}>
      <div className={styles.descriptionWrap}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        {button && (
          <Button
            className={styles.subscriptionButton}
            to={button.url}
            size={button.size}
            secondary={button.secondary}
            type="link"
          >
            {button.text}
          </Button>
        )}
      </div>

      <ul className={styles.list}>
        {benefits.length &&
          benefits.map(({ id, icon, text }) => <Benefit key={id} icon={icon} description={text} />)}
      </ul>
    </section>
  );
};

export default Benefits;
