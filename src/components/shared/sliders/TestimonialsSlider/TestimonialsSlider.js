import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import * as styles from './TestimonialsSlider.module.scss';
import cs from 'classnames';
import RatingStars from '../../RatingStars/RatingStars';

const TestimonialsSlider = () => {
  return (
    <div className={styles.sliderWrap}>
      <Swiper
        className={cs(styles.slider)}
        modules={[Pagination]}
        spaceBetween={33}
        slidesPerView={1.8}
        pagination={{
          clickable: true,
          type: 'bullets',
          el: `.${styles.swiperPagination}`,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
        }}
      >
        <SwiperSlide className={styles.slide}>
          <RatingStars className={styles.stars} rating="4" />
          <h4 className={styles.title}>Wspaniałe</h4>
          <p className={styles.text}>
            Subskrybujemy kawę Cortado od trzech miesięcy, wszystkie dostawy były dokładnie na czas
            i według naszych oczekiwań. To bardzo wygoda forma współpracy, a dodatkowo cieszymy się
            naprawdę dobrą kawą, która smakuje całej załodze.
          </p>
          <p className={styles.sign}>Jan Kowalski, właściciel Bellano</p>
        </SwiperSlide>

        <SwiperSlide className={styles.slide}>
          <RatingStars className={styles.stars} rating="2" />
          <h4 className={styles.title}>Wspaniałe</h4>
          <p className={styles.text}>
            Subskrybujemy kawę Cortado od trzech miesięcy, wszystkie dostawy były dokładnie na czas
            i według naszych oczekiwań. To bardzo wygoda forma współpracy, a dodatkowo cieszymy się
            naprawdę dobrą kawą, która smakuje całej załodze.
          </p>
          <p className={styles.sign}>Jan Kowalski, właściciel Bellano</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <RatingStars className={styles.stars} rating="2" />
          <h4 className={styles.title}>Wspaniałe</h4>
          <p className={styles.text}>
            Subskrybujemy kawę Cortado od trzech miesięcy, wszystkie dostawy były dokładnie na czas
            i według naszych oczekiwań. To bardzo wygoda forma współpracy, a dodatkowo cieszymy się
            naprawdę dobrą kawą, która smakuje całej załodze.
          </p>
          <p className={styles.sign}>Jan Kowalski, właściciel Bellano</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <RatingStars className={styles.stars} rating="2" />
          <h4 className={styles.title}>Wspaniałe</h4>
          <p className={styles.text}>
            Subskrybujemy kawę Cortado od trzech miesięcy, wszystkie dostawy były dokładnie na czas
            i według naszych oczekiwań. To bardzo wygoda forma współpracy, a dodatkowo cieszymy się
            naprawdę dobrą kawą, która smakuje całej załodze.
          </p>
          <p className={styles.sign}>Jan Kowalski, właściciel Bellano</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <RatingStars className={styles.stars} rating="2" />
          <h4 className={styles.title}>Wspaniałe</h4>
          <p className={styles.text}>
            Subskrybujemy kawę Cortado od trzech miesięcy, wszystkie dostawy były dokładnie na czas
            i według naszych oczekiwań. To bardzo wygoda forma współpracy, a dodatkowo cieszymy się
            naprawdę dobrą kawą, która smakuje całej załodze.
          </p>
          <p className={styles.sign}>Jan Kowalski, właściciel Bellano</p>
        </SwiperSlide>
      </Swiper>

      <div className={styles.swiperPagination} />
    </div>
  );
};

export default TestimonialsSlider;
