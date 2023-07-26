import React from 'react';
import * as styles from './Button.module.scss';
import cs from 'classnames';
import { Link } from 'gatsby';

const Button = ({
  children,
  className = '',
  type = 'button',
  onClick,
  disabled,
  size = '',
  text,
  secondary,
  to,
  ...rest
}) => {
  return (
    <>
      {type === 'link' ? (
        <Link
          {...rest}
          to={to}
          className={cs(styles.button, className, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.text]: text,
            [styles.secondary]: secondary,
          })}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </Link>
      ) : (
        <button
          {...rest}
          className={cs(styles.button, className, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.text]: text,
            [styles.secondary]: secondary,
          })}
          type={type}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
