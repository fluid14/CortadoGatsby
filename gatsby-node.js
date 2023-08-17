/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require(`path`);
const slugify = require('slugify');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  if (page.path.match(/^\/app/)) {
    page.matchPath = `/app/*`;
    createPage(page);
  }
};

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
                    url
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
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
              sectionInfo {
                sectionId
              }
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
                    url
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
                  url
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
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
                    url
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
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
                    url
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
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
            ... on STRAPI__COMPONENT_SECTIONS_WYSWIG {
              id
              wyswig {
                data {
                  wyswig
                }
              }
              strapi_component
            }
          }
        }
      }

      allStrapiProduct {
        nodes {
          name
          subName
          description
          descriptionImage {
            alternativeText
            localFile {
              url
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
              }
            }
          }
          id
          otherProducts {
            sectionInfo {
              id
            }
            text
            title
          }
          productSteps {
            button {
              id
              secondary
              size
              text
              url
            }
            subtext
            title
            steps {
              backgroundColor
              description
              id
              image {
                alternativeText
                localFile {
                  url
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
                  }
                }
              }
              title
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

  query.data.allStrapiProduct.nodes.forEach((node) => {
    createPage({
      path: `/produkt/${slugify(node.name, { lower: true })}`,
      component: path.resolve(`./src/layout/Product/Product.js`),
      context: {
        data: node,
      },
    });
  });
};
