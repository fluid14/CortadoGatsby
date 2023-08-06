import React from 'react';
import * as styles from './ProductImage.module.scss';
import { Link } from 'gatsby';
import cs from 'classnames';
import Image from '../../../shared/Image/Image';

const ProductImage = ({ className, img, link }) => {
  console.log(img);
  return (
    <Link className={cs(className, styles.productImageWrap)} to={link}>
      <Image className={styles.image} image={img} />
    </Link>
  );
};

export default ProductImage;
