import React, { useState } from 'react';
import * as styles from './NumberPicker.module.scss';
import cs from 'classnames';
import plusImage from '../../../../images/icons/plus.svg';
import minusImage from '../../../../images/icons/minus.svg';

const NumberPicker = ({ className, name, register, setValue: setFormValue }) => {
  const [value, setValue] = useState(0);
  setFormValue(name, value);

  const handlePlus = () => {
    setValue((prev) => prev + 1);
    setFormValue(name, value);
  };

  const handleMinus = () => {
    setValue((prev) => (prev > 0 ? prev - 1 : 0));
    setFormValue(name, value);
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
