import React from 'react';
import cs from 'classnames';
import * as styles from './Wyswig.module.scss';

const Wyswig = ({ className, data }) => {
  const {
    wyswig: {
      data: { wyswig },
    },
  } = data;

  return (
    <div
      className={cs('section', className, styles.wyswig)}
      dangerouslySetInnerHTML={{ __html: wyswig }}
    />
  );
};

export default Wyswig;
