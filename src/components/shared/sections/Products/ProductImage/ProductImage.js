import React from 'react';
import * as styles from './ProductImage.module.scss';
import { Link } from 'gatsby';
import cs from 'classnames';

const ProductImage = ({ className, img, link }) => {
  return (
    <Link className={cs(className, styles.productImageWrap)} to={link}>
      <img src={img} alt="product" className={styles.image} />
    </Link>
  );
};

export default ProductImage;
