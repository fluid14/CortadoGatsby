import React from 'react';
import * as styles from './Popup.module.scss';
import cs from 'classnames';

const Popup = ({ children, className }) => {
  return <div className={cs(className, styles.popupWrap)}>{children}</div>;
};

export default Popup;
