import React from 'react';
import * as styles from './PopupFooter.module.scss';
import cs from 'classnames';

const PopupFooter = ({ children, className }) => {
  return <div className={cs(className, styles.popupFooterWrap)}>{children}</div>;
};

export default PopupFooter;
