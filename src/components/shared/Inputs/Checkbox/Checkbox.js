import React from 'react';
import * as styles from './Checkbox.module.scss';
import cs from 'classnames';

const Checkbox = ({
  children,
  className,
  name,
  register = () => {},
  validationSchema,
  error,
  ...rest
}) => {
  return (
    <label className={cs(className, styles.checkbox, { [styles.error]: error })} htmlFor={name}>
      <input
        {...rest}
        className={styles.input}
        type="checkbox"
        name={name}
        id={name}
        {...register(name, validationSchema)}
      />
      {children}
    </label>
  );
};

export default Checkbox;
