import React from 'react';
import ProductDescription from '../components/sections/ProductDescription/ProductDescription';

const Product = ({
  pageContext: {
    data,
    data: { name, subName, description, descriptionImage },
  },
}) => {
  console.log(data);
  return (
    <>
      <ProductDescription
        name={name}
        subName={subName}
        description={description}
        descriptionImage={descriptionImage}
      />
    </>
  );
};

export default Product;
