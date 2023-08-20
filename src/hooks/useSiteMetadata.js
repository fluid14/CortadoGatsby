import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiGlobal {
        favicon {
          localFile {
            url
          }
        }
        siteUrl
        seo {
          keywords
          preventIndexing
          title
          description
          shareImage {
            localFile {
              url
            }
          }
        }
      }
    }
  `);

  return data.strapiGlobal;
};
