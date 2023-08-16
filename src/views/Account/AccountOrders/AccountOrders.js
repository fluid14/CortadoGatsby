import React, { useContext, useEffect } from 'react';
import * as styles from './AccountOrders.module.scss';
import AccountContentTitle from '../../../components/Account/AccountContentTitle/AccountContentTitle';
import { AuthContext } from '../../../context/AuthContext';

const AccountOrders = () => {
  const { getUserOrders, getUserOrder } = useContext(AuthContext);
  useEffect(() => {
    getUserOrders().then(({ data: { orders } }) => {
      orders.forEach(({ id }) => {
        console.log(id);
        getUserOrder(id).then((data) => console.log(data));
      });
    });
  }, []);

  return (
    <section className={styles.accountOrdersWrap}>
      <AccountContentTitle>Zamówienia</AccountContentTitle>

      <ul className={styles.orderList}>
        <li className={styles.orderItem}>
          <div className={styles.orderItemHeader}>
            <div className={styles.orderItemHeaderLeft}>
              <h3 className={styles.orderItemTitle}>Zamówienie #1</h3>
              <span className={styles.orderItemDate}>Data: 2020-01-01</span>
            </div>
            <div className={styles.orderItemHeaderRight}>
              <span className={styles.orderItemStatus}>Status: Zrealizowane</span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default AccountOrders;
