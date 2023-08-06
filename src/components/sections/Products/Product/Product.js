import React from 'react';
import * as styles from './Product.module.scss';
import { Link } from 'gatsby';
import cs from 'classnames';

import ProductImage from '../ProductImage/ProductImage';
import slugify from 'slugify';

const Product = ({ img, title, description, link = '#' }) => {
  return (
    <li className={styles.productWrap}>
      <ProductImage
        className={styles.image}
        img={img}
        link={`/produkt/${slugify(title, { lower: true })}`}
      />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      <Link
        className={cs('link', styles.productPage)}
        to={`/produkt/${slugify(title, { lower: true })}`}
      >
        Karta produktu
      </Link>
    </li>
  );
};

export default Product;
