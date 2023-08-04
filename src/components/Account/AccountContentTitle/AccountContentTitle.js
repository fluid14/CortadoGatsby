import React from 'react';
import * as styles from './AccountContentTitle.module.scss';

const AccountContentTitle = ({ children }) => {
  return <h2 className={styles.accountContentTitle}>{children}</h2>;
};

export default AccountContentTitle;
