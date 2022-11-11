import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query User($email: String!) {
    user(email: $email) {
      _id
      firstName
      lastName
      email
      password
      responses {
        appetiteScale
        _id
        depressionScale
        happyScale
        anxiousScale
        irritableScale
        energeticScale
        sleepHours
        medicationCheck
        notesCheck
        createdAt
      }
      contacts {
        _id
        lastName
        firstName
        phone
        email
        createdAt
      }
    }
  }
`;

export const QUERY_RESPONSES = gql`
  query Responses {
    responses {
      _id
      depressionScale
      happyScale
      anxiousScale
      irritableScale
      energeticScale
      appetiteScale
      sleepHours
      medicationCheck
      notesCheck
      createdAt
    }
  }
`;

export const QUERY_CONTACTS = gql`
  query getContacts {
    contacts {
      _id
      createdAt
      email
      firstName
      lastName
      phone
    }
  }
`;
