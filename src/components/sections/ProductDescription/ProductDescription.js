import React from 'react';
import * as styles from './ProductDescription.module.scss';
import cs from 'classnames';
import Button from '../../shared/Button/Button';
import routes from '../../../routes.json';
import { GatsbyImage } from 'gatsby-plugin-image';

const ProductDescription = ({
  name,
  subName,
  description,
  descriptionImage: { localFile, alternativeText },
}) => {
  return (
    <section className={cs('section fullWidth', styles.productDescription)}>
      <div className={styles.content}>
        <h1 className={styles.title}>{name}</h1>
        <h2 className={styles.subTitle}>{subName}</h2>
        <p className={styles.text}>{description}</p>

        <Button className={styles.subscriptionButton} size="small" type="link" to={routes.order}>
          Chcę subskrybować
        </Button>
      </div>

      <div className={styles.imageWrap}>
        <GatsbyImage
          className={styles.image}
          image={localFile.childImageSharp.gatsbyImageData}
          alt={alternativeText}
        />
      </div>
    </section>
  );
};

export default ProductDescription;
