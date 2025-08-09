import { gql } from '@apollo/client';

export const GET_INFORMATION_CENTERS = gql`
  query InformationCenters {
    informationCenters {
      edges {
        node {
          informationCenterFields {
            address
            closedDays
            email
            helpline
            operatingHours
            phone
          }
        }
      }
    }
  }
`;
