import { gql } from '@apollo/client';

export const GET_ALL_SYLLABUS = gql`
  query GetAllSyllabus {
    shokolSyllabuses {
      edges {
        node {
          shokolSyllabusFields {
            date
            syllabusTitle
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
