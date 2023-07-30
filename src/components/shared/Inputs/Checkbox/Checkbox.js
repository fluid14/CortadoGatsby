import React from 'react';
import * as styles from './Checkbox.module.scss';
import cs from 'classnames';

const Checkbox = ({ children, className, name, register = () => {}, error, ...rest }) => {
  return (
    <label className={cs(className, styles.checkbox, { [styles.error]: error })} htmlFor={name}>
      <input
        {...rest}
        className={styles.input}
        type="checkbox"
        name={name}
        id={name}
        {...register(name)}
      />
      {children}
    </label>
  );
};

export default Checkbox;
