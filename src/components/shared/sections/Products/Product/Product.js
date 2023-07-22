import React from 'react';
import * as styles from './Product.module.scss';
import { Link } from 'gatsby';
import cs from 'classnames';

import ProductImage from '../ProductImage/ProductImage';

const Product = ({ img, title, description, link = '#' }) => {
  return (
    <li className={styles.productWrap}>
      <ProductImage className={styles.image} img={img} link={link} />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      <Link className={cs('link', styles.productPage)} to={link}>
        Karta produktu
      </Link>
    </li>
  );
};

export default Product;
