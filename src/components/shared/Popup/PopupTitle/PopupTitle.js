import React from 'react';
import cs from 'classnames';
import * as styles from './PopupTitle.module.scss';

const PopupTitle = ({ children, className, marginSmall = false }) => {
  return (
    <h1 className={cs(className, styles.title, { [styles.marginSmall]: marginSmall })}>
      {children}
    </h1>
  );
};

export default PopupTitle;
