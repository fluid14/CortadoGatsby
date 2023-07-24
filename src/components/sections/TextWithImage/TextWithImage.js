import React from 'react';
import * as styles from './TextWithImage.module.scss';
import cs from 'classnames';

const TextWithImage = () => {
  return (
    <section className={cs('section fullWidth', styles.textWithImageWrap)}>
      <h3 className={styles.text}>Dbamy o to co ważne</h3>
    </section>
  );
};

export default TextWithImage;
