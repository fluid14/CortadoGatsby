import React from 'react';
import ProductAmountPicker from '../../shared/Inputs/ProductAmountPicker/ProductAmountPicker';
import { graphql, useStaticQuery } from 'gatsby';

const OrderProductList = ({ register, setValue }) => {
  const {
    allStrapiProduct: { nodes },
  } = useStaticQuery(graphql`
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
  `);

  return (
    <>
      {nodes.map((data) => (
        <ProductAmountPicker
          key={data.id}
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
