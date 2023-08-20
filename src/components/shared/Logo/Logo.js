import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Logo.module.scss';
import cs from 'classnames';

const Logo = ({ children, className }) => {
  return (
    <Link className={cs(className, styles.logo)} to="/">
      {children}
    </Link>
  );
};

export default Logo;
