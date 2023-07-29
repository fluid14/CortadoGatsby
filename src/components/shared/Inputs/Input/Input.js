import React from 'react';
import cs from 'classnames';
import * as styles from './Input.module.scss';

const Input = ({
  className,
  label = '',
  name,
  error,
  validationSchema,
  register = () => {},
  ...rest
}) => {
  return (
    <div className={styles.inputWrap}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        className={cs(className, styles.input)}
        name={name}
        id={name}
        {...register(name, validationSchema)}
      />
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
};

export default Input;
