import React from 'react';
import * as styles from './Product.module.scss';
import ProductDescription from '../../components/sections/ProductDescription/ProductDescription';
import HowItWorkSteps from '../../components/sections/HowItWork/HowItWorkSteps/HowItWorkSteps';
import Products from '../../components/sections/Products/Products';

const Product = ({
  pageContext: {
    data,
    data: {
      name,
      subName,
      description,
      descriptionImage,
      productSteps: { steps, button, subtext, title },
      otherProducts,
    },
  },
}) => {
  console.log(data);

  return (
    <div className={styles.productPageWrap}>
      <ProductDescription
        name={name}
        subName={subName}
        description={description}
        descriptionImage={descriptionImage}
      />

      <HowItWorkSteps
        className={styles.steps}
        steps={steps}
        button={button}
        diagramSufix={subtext}
        diagramTitle={title}
      />

      <Products data={otherProducts} />
    </div>
  );
};

export default Product;