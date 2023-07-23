import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import * as styles from './HeaderSlider.module.scss';
import Button from '../../Button/Button';
import cs from 'classnames';

import sliderImage from '../../../../images/develop/headerSlider1.png';

const HeaderSlider = () => {
  return (
    <Swiper
      className={cs('section fullWidth', styles.slider)}
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className={styles.slide}>
        <div className={styles.contentWrap}>
          <p className={styles.subtext}>Cortado</p>
          <h2 className={styles.title}>Subskrybuj kawę dla Twojego biznesu.</h2>
          <p className={styles.text}>Anuluj w dowolnym momencie.</p>
          <Button className={styles.button}>Sprawdź jak to działa</Button>
        </div>
        <div className={styles.imageWrap}>
          <img className={styles.image} src={sliderImage} alt="header-slider-1" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeaderSlider;
