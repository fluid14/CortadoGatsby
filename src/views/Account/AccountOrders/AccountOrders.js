import React, { useContext, useEffect, useState } from 'react';
import * as styles from './AccountOrders.module.scss';
import AccountContentTitle from '../../../components/Account/AccountContentTitle/AccountContentTitle';
import { AuthContext } from '../../../context/AuthContext';
import Button from '../../../components/shared/Button/Button';
import { formatDate } from '../../../utils/date';
import Modal from '../../../components/shared/Modals/Modal';
import useModal from '../../../hooks/useModal';
import ConfirmModal from '../../../components/shared/Modals/Confirm/Confirm';
import { toast } from 'react-toastify';

const AccountOrders = () => {
  const { isShowing, toggle } = useModal();
  const { getUserOrders, getUserOrder, cancelUserOrder } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    handleGetUserOrders();
  }, []);

  const handleGetUserOrders = () => {
    setOrders(() => []);
    return getUserOrders().then(({ data: { orders } }) => {
      orders.forEach(({ id }) => {
        getUserOrder(id).then(({ data: { data } }) => setOrders((prev) => [...prev, data]));
      });
    });
  };

  const handleCancelUserOrder = (id) => {
    setOrderId(() => id);
    console.log(orderId);
    toggle();
  };

  const confirmCancelUserOrder = (id) => {
    cancelUserOrder(id).then(() => {
      toast.success('Zamówienie zostało anulowane');
      toggle();
      handleGetUserOrders();
    });
  };

  return (
    <section className={styles.accountOrdersWrap}>
      <AccountContentTitle>Zamówienia</AccountContentTitle>

      <ul className={styles.orderList}>
        {orders &&
          orders.map(({ attributes: order, id }) => (
            <li className={styles.orderItem} key={order.createdAt}>
              <ul className={styles.products}>
                {order.products &&
                  order.products.map((product) => (
                    <li className={styles.productItem} key={product.id}>
                      <p className={styles.productName}>
                        <span className={styles.quantity}>{product.quantity}x</span> {product.title}
                      </p>
                    </li>
                  ))}
              </ul>

              <p className={styles.cell}>
                <span className={styles.title}>Status:</span>
                {order.status === 'in progress' && 'W trakcie realizacji'}
                {order.status === 'complete' && 'W trakcie realizacji'}
                {order.status === 'failed' && 'Nie powiodło się'}
                {order.status === 'canceled' && 'Anulowane'}
              </p>
              <p className={styles.cell}>
                <span className={styles.title}>Płatność:</span>
                {order.payment === 'unpaid' || order.payment === 'failed'
                  ? 'Nieopłacone'
                  : 'Opłacone'}
              </p>
              <p className={styles.cell}>
                <span className={styles.title}>Rozpoczęcie subskrypcji:</span>
                {formatDate(new Date(order.startDate))}
              </p>
              <p className={styles.cell}>
                <span className={styles.title}>Metoda dostawy:</span>
                {order.shipping?.name || '-'}
              </p>
              <p className={styles.cell}>
                <span className={styles.title}>Data zamówienia:</span>
                {formatDate(new Date(order.createdAt))}
              </p>
              <p className={styles.cell}>
                <span className={styles.title}>Cena:</span>
                {order.price}zł
              </p>
              {order.status !== 'canceled' && order.status !== 'failed' && (
                <Button
                  className={styles.cancelButton}
                  size="small"
                  onClick={() => handleCancelUserOrder(id)}
                >
                  Anuluj
                </Button>
              )}
            </li>
          ))}
      </ul>

      <Modal isShowing={isShowing} toggle={toggle}>
        <ConfirmModal
          confirmText="Tak"
          cancelText="Nie"
          confirmAction={() => confirmCancelUserOrder(orderId)}
          cancelAction={toggle}
        >
          Czy na pewno chcesz anulować subskrypcje?
        </ConfirmModal>
      </Modal>
    </section>
  );
};

export default AccountOrders;
