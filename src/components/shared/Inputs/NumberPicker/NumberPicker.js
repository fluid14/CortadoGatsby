import React, { useState } from 'react';
import * as styles from './NumberPicker.module.scss';
import cs from 'classnames';
import plusImage from '../../../../images/icons/plus.svg';
import minusImage from '../../../../images/icons/minus.svg';
import { STRAPI_PRODUCT } from '../../../../constant';

const NumberPicker = ({ className, register, setValue: setFormValue, stripeId, price }) => {
  const [value, setValue] = useState(0);
  const name = `${STRAPI_PRODUCT}${stripeId}`;

  setFormValue(name, value, 0);

  const handlePlus = () => {
    setValue((prev) => prev + 1);
    setFormValue(name, value, price);
  };

  const handleMinus = () => {
    setValue((prev) => (prev > 0 ? prev - 1 : 0));
    setFormValue(name, value, value > 0 ? -price : 0);
  };

  return (
    <div className={cs(className, styles.numberPicker)}>
      <button className={cs(styles.minus, styles.button)} type="button" onClick={handleMinus}>
        <img src={minusImage} alt="minus" />
      </button>
      <input
        className={styles.input}
        type="number"
        name={name}
        id={name}
        {...register(name)}
        disabled
      />
      <button className={cs(styles.plus, styles.button)} type="button" onClick={handlePlus}>
        <img src={plusImage} alt="plus" />
      </button>
    </div>
  );
};

export default NumberPicker;
