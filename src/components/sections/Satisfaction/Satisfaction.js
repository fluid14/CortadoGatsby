import React from 'react';
import * as styles from './Satisfaction.module.scss';
import cs from 'classnames';
import leafImage from '../../../images/leaf.svg';
import { GatsbyImage } from 'gatsby-plugin-image';

const Satisfaction = ({ data: { coloredText, text, icon } }) => {
  return (
    <section className={cs('section fullWidth', styles.satisfactionWrap)}>
      <h3 className={styles.text}>
        <span className={styles.title}>{coloredText}</span> {text}
      </h3>

      {icon && (
        <GatsbyImage
          className={styles.imageSun}
          image={icon.localFile.childImageSharp.gatsbyImageData}
          alt={icon.alternativeText}
        />
      )}
      <img className={styles.imageLeaf} src={leafImage} alt="Liść" />
    </section>
  );
};

export default Satisfaction;
