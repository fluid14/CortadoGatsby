import React from 'react';
import * as styles from './PriceSummary.module.scss';
import cs from 'classnames';

const PriceSummary = ({ children, className }) => {
  return <p className={cs(className, styles.priceSummary)}>{children}</p>;
};

export default PriceSummary;
