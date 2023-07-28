import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import * as styles from './TestimonialsSlider.module.scss';
import cs from 'classnames';
import RatingStars from '../../RatingStars/RatingStars';

const TestimonialsSlider = ({ slides }) => {
  return (
    <div className={styles.sliderWrap}>
      <Swiper
        className={cs(styles.slider)}
        modules={[Pagination]}
        spaceBetween={33}
        slidesPerView="auto"
        pagination={{
          clickable: true,
          type: 'bullets',
          el: `.${styles.swiperPagination}`,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
        }}
      >
        {slides.length &&
          slides.map(({ id, sign, stars, text, title }) => (
            <SwiperSlide className={styles.slide} key={id}>
              <RatingStars className={styles.stars} rating={stars} />
              <h4 className={styles.title}>{title}</h4>
              <p className={styles.text}>{text}</p>
              <p className={styles.sign}>{sign}</p>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className={styles.swiperPagination} />
    </div>
  );
};

export default TestimonialsSlider;
