import { gql } from '@apollo/client';

export const GET_SCHOOL_NOTICES = gql`
  query GetSchoolNotices($first: Int = 10) {
    schoolNotices(first: $first) {
      nodes {
        id
        title
        content
        date
        uri
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        schoolNoticeSettings {
          isImportant
          noticeDate
        }
      }
    }
  }
`;

export const GET_LATEST_NOTICES = gql`
  query GetLatestNotices($first: Int = 5) {
    schoolNotices(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        date
        uri
        schoolNoticeSettings {
          isImportant
        }
      }
    }
  }
`;
