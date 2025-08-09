import { gql } from '@apollo/client';

export const GET_SRENIBHITTIKSHAKHAS = gql`
  query SrenibhittikShakhas {
    srenibhittikShakhas {
      edges {
        node {
          srenibhittikShakhaFields {
            class
            date
            section
          }
        }
      }
    }
  }
`;
