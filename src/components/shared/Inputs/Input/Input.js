import React from 'react';
import cs from 'classnames';
import * as styles from './Input.module.scss';

const Input = ({ className, title = '', name, error, ...rest }) => {
  return (
    <div className={styles.inputWrap}>
      <label className={styles.label} htmlFor={name}>
        {title}
      </label>
      <input {...rest} className={cs(className, styles.input)} name={name} id={name} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
