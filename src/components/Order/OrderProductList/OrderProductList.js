import React from 'react';
import ProductAmountPicker from '../../shared/Inputs/ProductAmountPicker/ProductAmountPicker';
import { graphql, useStaticQuery } from 'gatsby';

// const OrderProductList = ({ register, setValue }) => {
//   return (
//     <StaticQuery
//       query={graphql`
//         query ProductsOrderQuery {
//           allStrapiProduct {
//             nodes {
//               name
//               strapi_id
//               numberOfGrain
//               bestseller
//               image {
//                 alternativeText
//                 localFile {
//                   childImageSharp {
//                     gatsbyImageData
//                   }
//                   url
//                 }
//               }
//               imageBackgroundColor
//               price
//               stripeId
//             }
//           }
//         }
//       `}
//       render={(products) => (
//         <OrderProductListComponent products={products} register={register} setValue={setValue} />
//       )}
//     />
//   );
// };

const OrderProductList = ({ register, setValue }) => {
  const data = useStaticQuery(graphql`
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

  const {
    allStrapiProduct: { nodes },
  } = data;
  return (
    <>
      {nodes.length > 0 &&
        nodes.map((data, index) => (
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
