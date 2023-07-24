import React from 'react';
import * as styles from './RatingStars.module.scss';
import cs from 'classnames';

const RatingStars = ({ className = '', rating = 5 }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const star = `
      <svg
              width="38"
              height="42"
              viewBox="0 0 38 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.0457 16.0775L22.6769 14.5705L18.0418 5.17371C17.9152 4.91643 17.7069 4.70816 17.4496 4.58156C16.8044 4.26302 16.0203 4.52847 15.6977 5.17371L11.0626 14.5705L0.693766 16.0775C0.4079 16.1183 0.146536 16.2531 -0.0535706 16.4573C-0.295488 16.7059 -0.428796 17.0404 -0.424201 17.3873C-0.419607 17.7342 -0.277486 18.0651 -0.0290678 18.3072L7.47289 25.6213L5.70051 35.9493C5.65895 36.1895 5.68554 36.4366 5.77726 36.6625C5.86898 36.8884 6.02216 37.0841 6.21944 37.2274C6.41671 37.3707 6.65019 37.4558 6.89339 37.4732C7.13659 37.4905 7.37979 37.4394 7.5954 37.3255L16.8697 32.4495L26.1441 37.3255C26.3972 37.4603 26.6913 37.5052 26.9731 37.4562C27.6836 37.3337 28.1615 36.6599 28.0389 35.9493L26.2666 25.6213L33.7685 18.3072C33.9727 18.1071 34.1075 17.8458 34.1483 17.5599C34.2586 16.8452 33.7604 16.1837 33.0457 16.0775V16.0775Z"
                fill="${i < rating ? '#FFE600' : '#E0E0E0'}"
              />
            </svg>`;
    stars.push({ star });
  }

  return (
    <div className={cs(className, styles.ratingStars)}>
      {stars.length &&
        stars.map(({ star }, index) => (
          <div className={styles.star} key={index} dangerouslySetInnerHTML={{ __html: star }} />
        ))}
    </div>
  );
};

export default RatingStars;
