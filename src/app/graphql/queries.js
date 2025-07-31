import { gql } from '@apollo/client';

export const GET_HERO_IMAGES = gql`
  query GetHeroImages {
    heroImages {
      nodes {
        id
        title
        heroImageSettings {
          heroImage {
            node {
              sourceUrl
              altText
            }
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;
