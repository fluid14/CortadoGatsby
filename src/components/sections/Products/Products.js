import React from 'react';
import * as styles from './Products.module.scss';
import cs from 'classnames';
import Button from '../../shared/Button/Button';
import Product from './Product/Product';
import { graphql, useStaticQuery } from 'gatsby';

const Products = ({ data: { title, text, button } }) => {
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
        {nodes.map(({ name, description, image, id, numberOfGrain, bestseller }) => (
          <Product
            key={id}
            img={image}
            title={name}
            description={description}
            numberOfGrain={numberOfGrain}
            bestseller={bestseller}
          />
        ))}
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
