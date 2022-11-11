import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query User($id: ID!) {
    user(id: $id) {
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
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
