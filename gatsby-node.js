/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const query = await graphql(`
    query HomePageQuery {
      strapiHome {
        id
        main {
          ... on STRAPI__COMPONENT_SECTIONS_HOW_IT_WORKS {
            id
            button {
              secondary
              size
              strapi_id
              text
              url
            }
            description {
              data {
                description
                id
              }
            }
            descriptionTitle
            strapi_component
            strapi_id
            title
            steps {
              description
              id
              image {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
                  }
                }
              }
              backgroundColor
              number
              strapi_id
              title
            }
            diagramSufix
            diagramTitle
          }
        }
      }
    }
  `);

  createPage({
    path: '/',
    component: path.resolve(`./src/layout/HomePage/HomePage.js`),
    context: {
      data: query.data.strapiHome.main,
    },
  });
};
