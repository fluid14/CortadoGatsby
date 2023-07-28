/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://kawacortado.pl`,
    title: `Cortado`,
    description: `Najlepsza kawa dla Twojej firmy!`,
    author: `@springStudio`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_API_TOKEN,
        singleTypes: [
          {
            singularName: 'header',
            queryParams: {
              populate: 'deep',
            },
          },
        ],
        collectionTypes: [
          {
            singularName: 'page',
            queryParams: {
              populate: 'deep',
            },
          },
        ],
      },
    },
  ],
};
