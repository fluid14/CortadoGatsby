import React from 'react';
import * as styles from './Product.module.scss';
import { Link } from 'gatsby';
import cs from 'classnames';

import ProductImage from '../ProductImage/ProductImage';
import slugify from 'slugify';

const Product = ({
  data: { name, description, image, numberOfGrain, bestseller, imageBackgroundColor },
}) => {
  return (
    <li className={styles.productWrap}>
      <ProductImage
        className={styles.image}
        img={image}
        link={`/produkt/${slugify(name, { lower: true })}`}
        numberOfGrain={numberOfGrain}
        bestseller={bestseller}
        backgroundColor={imageBackgroundColor}
      />
      <h4 className={styles.title}>{name}</h4>
      <p className={styles.description}>{description}</p>
      <Link className={cs('link')} to={`/produkt/${slugify(name, { lower: true })}`}>
        Karta produktu
      </Link>
    </li>
  );
};

export default Product;
