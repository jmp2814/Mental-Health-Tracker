import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
        password
      }
    }
  }
`;

export const ADD_RESPONSE = gql`
  mutation addResponse(
    $depressionScale: Int!
    $happyScale: Int!
    $anxiousScale: Int!
    $irritableScale: Int!
    $energeticScale: Int!
    $appetiteScale: Int!
    $sleepHours: Int!
    $medicationCheck: String!
    $notesCheck: String!
  ) {
    addResponse(
      depressionScale: $depressionScale
      happyScale: $happyScale
      anxiousScale: $anxiousScale
      irritableScale: $irritableScale
      energeticScale: $energeticScale
      appetiteScale: $appetiteScale
      sleepHours: $sleepHours
      medicationCheck: $medicationCheck
      notesCheck: $notesCheck
    ) {
      _id
      anxiousScale
      appetiteScale
      createdAt
      depressionScale
      energeticScale
      happyScale
      irritableScale
      medicationCheck
      notesCheck
      sleepHours
    }
  }
`;

export const ADD_CONTACT = gql`
  mutation addComment(
    $thoughtId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      thoughtId: $thoughtId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
