import React from 'react';
import * as styles from './Info.module.scss';
import infoIcon from '../../../images/icons/info.svg';
import cs from 'classnames';

const Info = ({ children, className }) => {
  return (
    <div className={cs(className, styles.infoWrap)}>
      <img className={styles.icon} src={infoIcon} alt="info" />
      <p className={styles.text}>{children}</p>
    </div>
  );
};

export default Info;
