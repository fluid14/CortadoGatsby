import React from 'react';
import * as styles from './Partners.module.scss';
import cs from 'classnames';
import Partner from './Partner/Partner';

const Partners = ({ data: { images } }) => {
  return (
    <div className={cs('section fullWidth small', styles.partnersWrap)}>
      {images.length &&
        images.map(({ id, image, text }) => <Partner key={id} image={image} text={text} />)}
    </div>
  );
};

export default Partners;
