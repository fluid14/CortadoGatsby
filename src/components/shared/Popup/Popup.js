import React from 'react';
import * as styles from './Popup.module.scss';
import cs from 'classnames';

const Popup = ({ children, className, decorator = false }) => {
  return (
    <div className={cs(className, styles.popupWrap, { [styles.decorator]: decorator })}>
      {children}
    </div>
  );
};

export default Popup;
