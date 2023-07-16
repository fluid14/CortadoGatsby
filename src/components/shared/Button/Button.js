import React from "react";
import * as styles from './Button.module.scss';
import cs from 'classnames';

const Button = ({children, className = '', type = 'button', onClick, disabled, size = '', text, secondary}) => {
    return (
        <button
            className={cs(
                styles.button, className, {
                    [styles.small]: size === 'small',
                    [styles.medium]: size === 'medium',
                    [styles.text]: text,
                    [styles.secondary]: secondary
                })}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
};

export default Button;
