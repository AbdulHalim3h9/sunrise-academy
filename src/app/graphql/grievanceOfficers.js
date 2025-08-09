import { gql } from '@apollo/client';

export const GET_GRIEVANCE_OFFICERS = gql`
  query GrievanceOfficers {
    grievanceOfficers {
      edges {
        node {
          grievanceOfficerFields {
            address
            complaintMethods
            designation
            email
            mobileNumber
            workingHours
            officerName
          }
        }
      }
    }
  }
`;
