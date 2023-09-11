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
import routes from '../../../routes';
import cs from 'classnames';

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
        getUserOrder(id).then(({ data: { data } }) => {
          const mappedData = { ...data };
          mappedData.attributes.createdAt = formatDate(new Date(data.attributes.createdAt));
          setOrders((prev) => [...prev, mappedData]);
        });
      });
    });
  };

  const handleCancelUserOrder = (id) => {
    setOrderId(() => id);
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
    <div className={styles.accountOrdersWrap}>
      <AccountContentTitle>Zamówienia</AccountContentTitle>

      <ul className={styles.orderList}>
        {orders.length === 0 && (
          <Button type="link" to={routes.order} className={styles.orderButton} size="medium">
            Złóż pierwsze zamówienie
          </Button>
        )}
        {orders.length > 0 &&
          orders.map(({ attributes: order, id }) => (
            <li
              className={cs(styles.orderItem, { [styles.canceled]: order.status === 'canceled' })}
              key={id}
            >
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
                {order.status === 'proforma' && 'W trakcie realizacji'}
                {order.status === 'dispatched' && 'W trakcie realizacji'}
                {order.status === 'failed' && 'Nie powiodło się'}
                {order.status === 'canceled' && 'Anulowane'}
              </p>
              <p className={styles.cell}>
                <span className={styles.title}>Rozpoczęcie subskrypcji:</span>
                {order.startDate}
              </p>
              <p className={styles.cell}>
                <span className={styles.title}>Metoda dostawy:</span>
                {order.shipping?.name || '-'}
              </p>
              <p className={styles.cell}>
                <span className={styles.title}>Data zamówienia:</span>
                {order.createdAt}
              </p>
              <p className={styles.cell}>
                <span className={styles.title}>Cena:</span>
                {order.price}zł
              </p>
              {order.status === 'dispatched' && (
                <Button
                  className={styles.cancelButton}
                  size="small"
                  onClick={() => handleCancelUserOrder(id)}
                >
                  Anuluj
                </Button>
              )}
              {order.status === 'canceled' && <p className={styles.cancelButton}>Anulowane</p>}
              {order.status === 'failed' && (
                <p className={styles.cancelButton}>Zamówienie nie powiodło się</p>
              )}
              {order.status === 'in progress' && (
                <p className={styles.cancelButton}>
                  Możliwość anulowania pojawi się kiedy pierwsze zamówienie zostanie wysłane
                </p>
              )}
              {order.status === 'complete' && (
                <p className={styles.cancelButton}>
                  Możliwość anulowania pojawi się kiedy pierwsze zamówienie zostanie wysłane
                </p>
              )}

              {order.status === 'proforma' && (
                <p className={styles.cancelButton}>
                  Możliwość anulowania pojawi się kiedy pierwsze zamówienie zostanie wysłane
                </p>
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
    </div>
  );
};

export default AccountOrders;
