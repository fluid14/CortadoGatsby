import React from 'react';
import * as styles from './AccountSettings.module.scss';
import AccountContentTitle from '../../../components/Account/AccountContentTitle/AccountContentTitle';

const AccountSettings = () => {
  return (
    <section className={styles.accountSettingsWrap}>
      <AccountContentTitle>Ustawienia</AccountContentTitle>
    </section>
  );
};

export default AccountSettings;
