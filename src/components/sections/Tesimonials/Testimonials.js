import React from 'react';
import cs from 'classnames';
import * as styles from './Testimonials.module.scss';
import TestimonialsSlider from '../../shared/sliders/TestimonialsSlider/TestimonialsSlider';
import RatingStars from '../../shared/RatingStars/RatingStars';

const Testimonials = () => {
  return (
    <section className={cs('section fullWidth small', styles.testimonialsWrap)}>
      <div className={styles.popup}>
        <div className={styles.description}>
          <h3 className={styles.title}>Poznajcie opinie naszych subskrybentów</h3>
          <RatingStars className={styles.stars} rating="5" />
          <p className={styles.text}>Na podstawie 121 opinii</p>
        </div>
        <TestimonialsSlider />
      </div>
    </section>
  );
};

export default Testimonials;
