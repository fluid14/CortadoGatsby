import React from 'react';
import * as styles from './TextWithImage.module.scss';
import cs from 'classnames';

const TextWithImage = ({
  data: {
    text,
    backgroundImage: {
      localFile: { url },
    },
  },
}) => {
  return (
    <section
      className={cs('section fullWidth', styles.textWithImageWrap)}
      style={{ backgroundImage: `url(${url})` }}
    >
      <h3 className={styles.text}>{text}</h3>
    </section>
  );
};

export default TextWithImage;
