import React from 'react';
import * as styles from './NumberPicker.module.scss';
import cs from 'classnames';
import plusImage from '../../../../images/icons/plus.svg';
import minusImage from '../../../../images/icons/minus.svg';

const NumberPicker = ({ className }) => {
  return (
    <div className={cs(className, styles.numberPicker)}>
      <button className={cs(styles.minus, styles.button)} type="button">
        <img src={minusImage} alt="minus" />
      </button>
      <input className={styles.input} type="number" value="1" />
      <button className={cs(styles.plus, styles.button)} type="button">
        <img src={plusImage} alt="plus" />
      </button>
    </div>
  );
};

export default NumberPicker;
