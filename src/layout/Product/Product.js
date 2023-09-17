import React from 'react';
import * as styles from './Product.module.scss';
import ProductDescription from '../../components/sections/ProductDescription/ProductDescription';
import Products from '../../components/sections/Products/Products';
import Seo from '../../components/seo';

const Product = ({
  pageContext: {
    data: { name, subName, description, descriptionImage, otherProducts },
  },
}) => {
  return (
    <div className={styles.productPageWrap}>
      <ProductDescription
        name={name}
        subName={subName}
        description={description}
        descriptionImage={descriptionImage}
      />

      <Products data={otherProducts} without={name} />
    </div>
  );
};

export default Product;

export const Head = ({
  pageContext: {
    data: { seo },
  },
}) => <Seo {...seo} />;
