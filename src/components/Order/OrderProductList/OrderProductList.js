import React from 'react';
import ProductAmountPicker from '../../shared/Inputs/ProductAmountPicker/ProductAmountPicker';
import { graphql, StaticQuery } from 'gatsby';

const OrderProductList = ({ register, setValue }) => {
  return (
    <StaticQuery
      query={graphql`
        query ProductsOrderQuery {
          allStrapiProduct {
            nodes {
              name
              strapi_id
              numberOfGrain
              bestseller
              image {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                  url
                }
              }
              imageBackgroundColor
              price
              stripeId
            }
          }
        }
      `}
      render={(products) => (
        <OrderProductListComponent products={products} register={register} setValue={setValue} />
      )}
    />
  );
};

const OrderProductListComponent = ({
  register,
  setValue,
  products: {
    allStrapiProduct: { nodes },
  },
}) => {
  return (
    <>
      {nodes.map((data, index) => (
        <ProductAmountPicker
          key={data.strapi_id}
          ref={null}
          data={data}
          register={register}
          setValue={setValue}
        />
      ))}
    </>
  );
};

export default OrderProductList;
