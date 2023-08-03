import React from 'react';
import * as styles from './DatePickerWrap.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import cs from 'classnames';

const DatePickerWrap = ({ children: datePicker, className, label, name }) => {
  return (
    <div className={cs(className, styles.datePickerWrap)}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {datePicker}
    </div>
  );
};

export default DatePickerWrap;
