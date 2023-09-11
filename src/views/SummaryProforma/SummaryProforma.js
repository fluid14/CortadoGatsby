import React from 'react';
import cs from 'classnames';
import * as styles from './SummaryProforma.module.scss';
import Button from '../../components/shared/Button/Button';
import routes from '../../routes.json';

const SummaryProforma = () => {
  return (
    <div className={cs('section', styles.summaryWrap)}>
      <h1 className={styles.title}>Dziękujemy za złożenie zamówienia!</h1>
      <p className={styles.subtitle}>Niedługo na Twój adres email przyjdzie faktura proforma.</p>
      <Button type="link" to={routes.accountOrders} size="medium">
        Przejdź do zamówień
      </Button>
    </div>
  );
};

export default SummaryProforma;
