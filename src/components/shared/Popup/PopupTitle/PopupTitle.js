import React from 'react';
import cs from 'classnames';
import * as styles from './PopupTitle.module.scss';

const PopupTitle = ({ children, className }) => {
  return <h1 className={cs(className, styles.title)}>{children}</h1>;
};

export default PopupTitle;
