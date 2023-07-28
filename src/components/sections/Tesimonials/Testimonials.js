import React from 'react';
import cs from 'classnames';
import * as styles from './Testimonials.module.scss';
import TestimonialsSlider from '../../shared/sliders/TestimonialsSlider/TestimonialsSlider';
import RatingStars from '../../shared/RatingStars/RatingStars';

const Testimonials = ({ data: { stars, subText, title, reviews } }) => {
  return (
    <section className={cs('section fullWidth small', styles.testimonialsWrap)}>
      <div className={styles.popup}>
        <div className={styles.description}>
          <h3 className={styles.title}>{title}</h3>
          <RatingStars className={styles.stars} rating={stars} />
          <p className={styles.text}>{subText}</p>
        </div>
        <TestimonialsSlider slides={reviews} />
      </div>
    </section>
  );
};

export default Testimonials;
