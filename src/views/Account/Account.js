import React, { useContext } from 'react';
import * as styles from './Account.module.scss';
import cs from 'classnames';
import { AuthContext } from '../../context/AuthContext';
import AccountAside from '../../components/Account/AccountAside/AccountAside';

const Account = ({ children }) => {
  const { getUser } = useContext(AuthContext);
  const { name } = getUser();

  return (
    <section className={cs('section', styles.accountWrap)}>
      <h1 className={styles.greetings}>Dzień dobry {name}!</h1>

      <div className={styles.accountContentWrap}>
        <AccountAside className={styles.accountAside} />

        <div className={styles.accountContent}>{children}</div>
      </div>
    </section>
  );
};

export default Account;
