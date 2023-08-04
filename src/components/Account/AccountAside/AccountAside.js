import React from 'react';
import * as styles from './AccountAside.module.scss';
import cs from 'classnames';
import { Link } from 'gatsby';
import routes from '../../../routes.json';

const AccountAside = ({ className }) => {
  return (
    <aside className={cs(className, styles.accountAsideWrap)}>
      <ul className={styles.accountSidebarList}>
        <li className={styles.accountSidebarItem}>
          <Link
            className={styles.navLink}
            activeClassName={styles.active}
            to={routes.accountOrders}
          >
            Zamówienia
          </Link>
        </li>
        <li className={styles.accountSidebarItem}>
          <Link
            className={styles.navLink}
            activeClassName={styles.active}
            to={routes.accountSettings}
          >
            Ustawienia
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AccountAside;
