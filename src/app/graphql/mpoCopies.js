import { gql } from '@apollo/client';

export const GET_MPO_COPIES = gql`
  query MpoCopies {
    mpoCopies {
      edges {
        node {
          mpoCopyDetails {
            date
            documentTitle
            fileUpload {
              node {
                link
              }
            }
          }
        }
      }
    }
  }
`;
