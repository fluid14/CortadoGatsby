import React from 'react';
import * as styles from './ProductDescription.module.scss';
import cs from 'classnames';
import Button from '../../shared/Button/Button';
import productImage from '../../../images/develop/productHeader.png';

const ProductDescription = () => {
  return (
    <section className={cs('section fullWidth', styles.productDescription)}>
      <div className={styles.content}>
        <h1 className={styles.title}>Cortado 100% Arabica</h1>
        <h2 className={styles.subTitle}>100% Arabica</h2>
        <p className={styles.text}>
          Ta kawa smakuje Wam najbardziej. Starannie skomponowana receptura ziaren kawy 100% arabica
          z plantacji Ameryki Łacińskiej i Afryki. Uniwersalna, średnio palona kompozycja ziaren
          wyróżnia się harmonijnym i wyrafinowanym smakiem. To kawa, która pogodzi najbardziej
          różnorodne gusta miłośników kawy. Napój idealnie sprawdza się jako skoncentrowana czarna
          kawa, jak również jako baza do kaw mlecznych.
        </p>

        <Button className={styles.subscriptionButton} size="small">
          Chcę subskrybować
        </Button>
      </div>

      <div className={styles.imageWrap}>
        <img className={styles.image} src={productImage} alt="header-slider-1" />
      </div>
    </section>
  );
};

export default ProductDescription;
