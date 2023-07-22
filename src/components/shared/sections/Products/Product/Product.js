import React from 'react';
import * as styles from './Product.module.scss';
import { Link } from 'gatsby';

const Product = ({ title, description, productPage = '#' }) => {
  return (
    <li className={styles.productWrap}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      <Link className={styles.productPage} to={productPage}>
        Karta produktu
      </Link>
    </li>
  );
};

export default Product;
