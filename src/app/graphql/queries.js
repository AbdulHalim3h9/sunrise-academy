import { gql } from '@apollo/client';

export const GET_TEACHER_STAFF = gql`
  query GetTeachers {
    teacherStaffs {
      nodes {
        id
        title
        teacherStaffInfo {
          phone
          position
          profileImage {
            node {
              id
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;

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
