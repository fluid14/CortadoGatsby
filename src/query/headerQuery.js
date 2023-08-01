import { graphql } from 'gatsby';

export const headerQuery = graphql`
  query HeaderQuery {
    strapiHeader {
      button {
        secondary
        size
        text
        url
      }
      logoText
      mail
      text
      navigation {
        id
        title
        url
      }
    }
  }
`;
