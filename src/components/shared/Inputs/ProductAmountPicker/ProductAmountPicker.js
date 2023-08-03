import React from 'react';
import * as styles from './ProductAmountPicker.module.scss';
import productImage from '../../../../images/develop/product.png';
import NumberPicker from '../NumberPicker/NumberPicker';

const ProductAmountPicker = () => {
  return (
    <div className={styles.productAmountPickerWrap}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={productImage} alt="product" />
      </div>
      <h3 className={styles.title}>Speciality</h3>
      <p className={styles.price}>
        <span className="bold">100 zł/</span>1kg
      </p>
      <p className={styles.description}>1 opakowanie = 1kg</p>
      <NumberPicker className={styles.numberPicker} />
    </div>
  );
};

export default ProductAmountPicker;
