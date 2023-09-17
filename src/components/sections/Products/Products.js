import React from 'react';
import * as styles from './Products.module.scss';
import cs from 'classnames';
import Button from '../../shared/Button/Button';
import Product from './Product/Product';
import { graphql, StaticQuery } from 'gatsby';

const Products = ({ data, without }) => {
  return (
    <StaticQuery
      query={graphql`
        query ProductsQuery {
          allStrapiProduct {
            nodes {
              name
              description
              id
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
            }
          }
        }
      `}
      render={(products) => <ProductsComponent data={data} products={products} without={without} />}
    />
  );
};

const ProductsComponent = ({
  data: { title, text, button, sectionInfo },
  without = '',
  products: {
    allStrapiProduct: { nodes },
  },
}) => {
  return (
    <div
      id={sectionInfo?.sectionId}
      className={cs('section small', styles.productsWrap, { [styles.nonMargin]: !button?.url })}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{text}</p>

      <ul className={styles.productsList}>
        {nodes.map((data) =>
          without === data.name ? null : <Product key={data.id} data={data} />
        )}
      </ul>

      {button?.url && (
        <Button type="link" to={button?.url} size={button?.size} secondary={button?.secondary}>
          {button?.text}
        </Button>
      )}
    </div>
  );
};

export default Products;
