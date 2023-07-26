import React from 'react';
import * as styles from './HowItWorkStep.module.scss';
import cs from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';

const HowItWorkStep = ({
  reverse,
  image: {
    alternativeText: imageAlt,
    localFile: {
      childImageSharp: { gatsbyImageData },
    },
  },
  number,
  title,
  description,
  backgroundColor,
}) => {
  return (
    <li className={cs(styles.stepWrap, { [styles.reverse]: reverse })}>
      <div className={styles.imageWrap} style={{ backgroundColor }}>
        <GatsbyImage className={styles.image} image={gatsbyImageData} alt={imageAlt} />
        {number && <p className={styles.number}>{number}</p>}
      </div>
      <div className={styles.descriptionWrap}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};

export default HowItWorkStep;
