import React from 'react';
import * as styles from './ProductImage.module.scss';
import { Link } from 'gatsby';
import cs from 'classnames';
import Image from '../../../shared/Image/Image';
import grainImage from '../../../../images/grain.svg';
import emptyGrainImage from '../../../../images/emptyGrain.svg';

const ProductImage = ({
  className,
  img,
  link,
  numberOfGrain,
  bestseller = null,
  backgroundColor,
  order = false,
}) => {
  const grains = [];
  for (let i = 0; i < 4; i++) {
    const grain = i < numberOfGrain ? grainImage : emptyGrainImage;
    grains.push(grain);
  }

  return (
    <Link
      className={cs(className, styles.productImageWrap, {
        [styles.order]: order,
        [styles.bestseller]: bestseller,
      })}
      style={{ backgroundColor }}
      to={link || '#'}
    >
      {bestseller && <div className={styles.bestseller}>Bestseller</div>}
      <Image className={styles.image} image={img} />
      <div className={styles.numberOfGrain}>
        {grains.length &&
          grains.map((grain, index) => (
            <img key={index} className={styles.grain} src={grain} alt="grain" />
          ))}
      </div>
    </Link>
  );
};

export default ProductImage;
