import { gql } from '@apollo/client';

export const GET_EK_NJORE_TOTHYOS = gql`
  query EkNjoreTothyos {
    ekNjoreTothyos {
      edges {
        node {
          ekNjoreTothyoFields {
            bankAccountNumber
            buildingCount
            classrooms
            eiinNumber
            emailAddress
            establishmentDate
            femaleStudentCommonRoom
            femaleTeacherCommonRoom
            firstMpoDate
            firstRecognitionDate
            founder
            hostelCount
            institutionAddress
            institutionCode
            institutionLocation
            institutionName
            liberationWarCorner
            landAmount
            mobileNumber
            libraryBooks
            mpoCode
            multimediaClassroom
            officeRoom
            prayerRoom
            scienceLab
            scoutRoom
            stallCount
            stipendCode
            stipendLocationCode
            teacherHousing
            toiletsStudentsFemale
            toiletsStudentsMale
            toiletsTeachers
            toiletsTotal
            totalStudents
            totalTeachers
            websiteAddress
          }
        }
      }
    }
  }
`;
