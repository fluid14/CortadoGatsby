import React from 'react';
import * as styles from './Checkbox.module.scss';
import cs from 'classnames';

const Checkbox = ({ children, className, name, ...rest }) => {
  return (
    <label className={cs(className, styles.checkbox)} htmlFor={name}>
      <input {...rest} className={styles.input} type="checkbox" name={name} id={name} />
      {children}
    </label>
  );
};

export default Checkbox;
