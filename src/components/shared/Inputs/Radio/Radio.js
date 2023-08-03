import React from 'react';
import * as styles from './Radio.module.scss';
import cs from 'classnames';

const Radio = ({
  children,
  className = '',
  name,
  register = () => {},
  value,
  id,
  error,
  ...rest
}) => {
  return (
    <label {...rest} className={cs(styles.radio, className, { [styles.error]: error })}>
      <input
        {...rest}
        {...register(name)}
        className={styles.input}
        type="radio"
        name={name}
        id={id}
        value={value}
      />
      <span className={styles.children}>{children}</span>
    </label>
  );
};

export default Radio;
