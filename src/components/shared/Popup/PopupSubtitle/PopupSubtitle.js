import React from 'react';
import cs from 'classnames';
import * as styles from './PopupSubtitle.module.scss';

const PopupSubtitle = ({ children, className, ...rest }) => {
  return (
    <p {...rest} className={cs(className, styles.popupSubtitle)}>
      {children}
    </p>
  );
};

export default PopupSubtitle;
