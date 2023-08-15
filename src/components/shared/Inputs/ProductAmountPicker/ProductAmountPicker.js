import React from 'react';
import * as styles from './ProductAmountPicker.module.scss';
import NumberPicker from '../NumberPicker/NumberPicker';
import ProductImage from '../../../sections/Products/ProductImage/ProductImage';

const ProductAmountPicker = ({
  data: {
    name,
    image,
    imageBackgroundColor: backgroundColor,
    numberOfGrain,
    bestseller,
    price,
    stripeId,
    strapi_id: id,
  },
  register,
  setValue,
}) => {
  return (
    <div className={styles.productAmountPickerWrap}>
      <ProductImage
        img={image}
        backgroundColor={backgroundColor}
        numberOfGrain={numberOfGrain}
        bestseller={bestseller}
        order
      />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.price}>
        <span className="bold">{price} zł/</span>1kg
      </p>
      <p className={styles.description}>1 opakowanie = 1kg</p>
      <NumberPicker
        className={styles.numberPicker}
        register={register}
        setValue={setValue}
        stripeId={stripeId}
        price={price}
        productId={id}
        productName={name}
      />
    </div>
  );
};

export default ProductAmountPicker;
