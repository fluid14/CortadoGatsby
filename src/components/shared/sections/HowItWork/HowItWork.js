import React from 'react';
import * as styles from './HowItWork.module.scss';
import cs from 'classnames';

const HowItWork = () => {
  return (
    <section className={cs('section', styles.howItWorkWrap)}>
      <h1 className={styles.title}>Na czym polega subskrypcja kawy?</h1>
      <div className={styles.descriptionWrap}>
        <p className={styles.subTitle}>Masz pełną kontrolę</p>
        <p className={styles.description}>
          Raz w miesiącu/Co miesiąc dostarczymy do Twojej firmy aromatyczną, znakomitej jakości kawę
          do ekspresu. Raz wybierasz rodzaj ziaren, częstotliwość, wielkość dostawy oraz czas
          trwania umowy. Pamiętaj, że umowę możesz anulować w każdym momencie. Zapewniamy pełną
          elastyczność i wygodę. Od teraz nie będziesz musiał się martwić o ciągłość dostaw, wybór
          kaw czy porównywanie ofert.
        </p>
      </div>
    </section>
  );
};

export default HowItWork;
