import React from 'react';
import cs from 'classnames';
import * as styles from './PopupHeader.module.scss';

const PopupHeader = ({ children, className }) => {
  return (
    <div className={cs('popupHeader', className, styles.popupHeader)}>
      <div>{children}</div>
    </div>
  );
};

export default PopupHeader;
