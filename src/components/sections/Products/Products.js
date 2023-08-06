import React from 'react';
import * as styles from './Products.module.scss';
import cs from 'classnames';
import Button from '../../shared/Button/Button';
import Product from './Product/Product';
import { graphql, useStaticQuery } from 'gatsby';

const Products = ({ data: { title, text, button }, without = '' }) => {
  const {
    allStrapiProduct: { nodes },
  } = useStaticQuery(graphql`
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
  `);

  return (
    <section
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
    </section>
  );
};

export default Products;
