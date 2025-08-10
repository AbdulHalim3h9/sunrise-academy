import { gql } from '@apollo/client';

export const GET_CLASS_ROUTINES = gql`
  query GetClassRoutines {
    shreniRoutines {
      edges {
        node {
          shreniRoutineFields {
            date
            routineTitle
            file {
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
