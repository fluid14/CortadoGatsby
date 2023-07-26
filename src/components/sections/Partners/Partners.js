import React from 'react';
import * as styles from './Partners.module.scss';
import cs from 'classnames';
import Partner from './Partner/Partner';

const Partners = () => {
  return (
    <section className={cs('section fullWidth small', styles.partnersWrap)}>
      <Partner />
      <Partner />
      <Partner />
      <Partner />
      <Partner />
      <Partner />
      <Partner />
      <Partner />
      <Partner />
      <Partner />
      <Partner />
      <Partner />
    </section>
  );
};

export default Partners;
