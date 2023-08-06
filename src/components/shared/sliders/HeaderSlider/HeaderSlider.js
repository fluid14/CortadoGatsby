import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import * as styles from './HeaderSlider.module.scss';
import Button from '../../Button/Button';
import cs from 'classnames';
import Image from '../../Image/Image';

const HeaderSlider = ({ data: { Slide } }) => {
  return (
    <section className={cs('section fullWidth', styles.sliderWrap)}>
      <Swiper
        className={cs(styles.slider)}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView="1"
        loop={true}
        pagination={{
          clickable: true,
          type: 'bullets',
          el: `.${styles.swiperPagination}`,
          renderBullet: function (index, className) {
            return `<span class="${className}">${
              index > 10 ? index + 1 : '0' + (index + 1)
            }</span>`;
          },
        }}
      >
        {Slide.map((slide) => {
          const { subTitle, title, text, button, image, id } = slide;

          return (
            <SwiperSlide className={styles.slide} key={id}>
              <div className={styles.contentWrap}>
                <p className={styles.subtext}>{subTitle}</p>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{text}</p>
                {button && (
                  <Button
                    to={button.url}
                    size={button.size}
                    secondary={button.secondary}
                    type="link"
                  >
                    {button.text}
                  </Button>
                )}
              </div>
              <div className={styles.imageWrap}>
                {image && <Image className={styles.image} image={image} />}
              </div>
            </SwiperSlide>
          );
        })}

        <div className={styles.swiperPagination} />
      </Swiper>
    </section>
  );
};

export default HeaderSlider;
