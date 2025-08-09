import { gql } from '@apollo/client';

export const GET_PERMISSIONS = gql`
  query PermissionsList {
    permissions {
      edges {
        node {
          title
          permissionDescriptions {
            date
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
