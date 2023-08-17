import React from 'react';
import * as styles from './ProductDescription.module.scss';
import cs from 'classnames';
import Button from '../../shared/Button/Button';
import routes from '../../../routes.json';
import Image from '../../shared/Image/Image';

const ProductDescription = ({ name, subName, description, descriptionImage }) => {
  return (
    <div className={cs('section fullWidth', styles.productDescription)}>
      <div className={styles.content}>
        <h1 className={styles.title}>{name}</h1>
        <h2 className={styles.subTitle}>{subName}</h2>
        <p className={styles.text}>{description}</p>

        <Button size="small" type="link" to={routes.order}>
          Chcę subskrybować
        </Button>
      </div>

      <div className={styles.imageWrap}>
        <Image className={styles.image} image={descriptionImage} />
      </div>
    </div>
  );
};

export default ProductDescription;
