/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const query = await graphql(`
    query PageQuery {
      allStrapiPage {
        nodes {
          pageInfo {
            path
            Title
          }
          main {
            ... on STRAPI__COMPONENT_SECTIONS_HEADER_SLIDER {
              id
              strapi_component
              Slide {
                button {
                  secondary
                  size
                  id
                  text
                  url
                }
                id
                image {
                  alternativeText
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                subTitle
                text
                title
              }
            }
            ... on STRAPI__COMPONENT_SECTIONS_HOW_IT_WORKS {
              id
              sectionId
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
            ... on STRAPI__COMPONENT_SECTIONS_TEXT_WITH_ICON {
              id
              coloredText
              icon {
                alternativeText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              strapi_component
              text
            }
            ... on STRAPI__COMPONENT_SECTIONS_BENEFITS {
              id
              benefits {
                icon {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  alternativeText
                }
                text
              }
              strapi_component
              text
              title
              button {
                secondary
                size
                strapi_id
                id
                text
                url
              }
            }
            ... on STRAPI__COMPONENT_SECTIONS_TESTIMONIALS {
              id
              reviews {
                title
                text
                stars
                sign
                id
              }
              stars
              strapi_component
              subText
              title
            }
            ... on STRAPI__COMPONENT_SECTIONS_PRODUCTS {
              id
              button {
                secondary
                size
                text
                url
                id
              }
              strapi_component
              text
              title
            }
            ... on STRAPI__COMPONENT_SECTIONS_TEXT_WITH_BACKGROUND_IMAGE {
              id
              backgroundImage {
                localFile {
                  url
                }
              }
              strapi_component
              text
            }
            ... on STRAPI__COMPONENT_SECTIONS_IMAGES_GRID {
              id
              strapi_component
              images {
                id
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  alternativeText
                }
                text
              }
            }
            ... on STRAPI__COMPONENT_SECTIONS_FAQ {
              id
              strapi_component
              title
              questions {
                text
                title
                id
              }
            }
          }
        }
      }
    }
  `);

  query.data.allStrapiPage.nodes.forEach(({ pageInfo: { path: pagePath }, main: data }) => {
    createPage({
      path: pagePath,
      component: path.resolve(`./src/layout/Default.js`),
      context: {
        data,
      },
    });
  });
};
