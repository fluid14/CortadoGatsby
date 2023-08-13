import React from 'react';
import cs from 'classnames';
import * as styles from './Summary.module.scss';
import Button from '../../components/shared/Button/Button';
import routes from '../../routes.json';

const Summary = () => {
  return (
    <section className={cs('section', styles.summaryWrap)}>
      <h1 className={styles.title}>Dziękujemy za złożenie zamówienia!</h1>
      <p className={styles.subtitle}>Na Twój adres email wysłaliśmy potwierdzenie.</p>
      <Button type="link" to={routes.accountOrders} size="medium">
        Przejdź do zamówień
      </Button>
    </section>
  );
};

export default Summary;
