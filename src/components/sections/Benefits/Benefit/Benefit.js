import React from 'react';
import * as styles from './Benefit.module.scss';
import { GatsbyImage } from 'gatsby-plugin-image';

const Benefit = ({ icon, description }) => {
  console.log(icon);
  return (
    <>
      {icon && (
        <li className={styles.benefitWrap}>
          <GatsbyImage
            className={styles.image}
            image={icon.localFile.childImageSharp.gatsbyImageData}
            alt={icon.alternativeText}
          />
          <p className={styles.text}>{description}</p>
        </li>
      )}
    </>
  );
};

export default Benefit;
