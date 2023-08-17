import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const Image = ({ image, className }) => {
  return (
    <>
      {image?.localFile?.childImageSharp?.gatsbyImageData ? (
        <GatsbyImage
          className={className}
          image={image?.localFile?.childImageSharp?.gatsbyImageData}
          alt={image.alternativeText || 'alternative text'}
        />
      ) : (
        <img
          className={className}
          src={image.localFile.url}
          alt={image.alternativeText || 'alternative text'}
        />
      )}
    </>
  );
};

export default Image;
