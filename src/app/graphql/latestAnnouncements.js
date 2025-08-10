import { gql } from '@apollo/client';

export const GET_LATEST_ANNOUNCEMENTS = gql`
  query GetLatestAnnouncements($first: Int, $after: String) {
    latestAnnouncements(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          id
          title
          date
          latestAnnouncementFields {
            description
            date
          }
        }
      }
    }
  }
`;
