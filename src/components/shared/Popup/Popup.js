import React from 'react';
import * as styles from './Popup.module.scss';
import cs from 'classnames';

const Popup = ({ children, className, decorator = false, withFooter = false }) => {
  return (
    <div
      className={cs(className, styles.popupWrap, {
        [styles.decorator]: decorator,
        [styles.withFooter]: withFooter,
      })}
    >
      {children}
    </div>
  );
};

export default Popup;
