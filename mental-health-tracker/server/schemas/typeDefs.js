const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    responses: [Response]!
    contacts: [Contact]!
  }

  type Response {
    _id: ID
    depressionScale: Int
    happyScale: Int
    anxiousScale: Int
    irritableScale: Int
    energeticScale: Int
    appetiteScale: Int
    sleepHours: Int
    medicationCheck: String
    notesCheck: String
    createdAt: String
  }

  type Contact {
    _id: ID
    firstName: String
    lastName: String
    phone: String
    email: String
    createdAt: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: [User]!
    responses: [Response]
    contacts: [Contact]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
    addResponse(
      depressionScale: Int!
      happyScale: Int!
      anxiousScale: Int!
      irritableScale: Int!
      energeticScale: Int!
      appetiteScale: Int!
      sleepHours: Int!
      medicationCheck: String!
      notesCheck: String!
    ): Response
    addContact(
      firstName: String!
      lastName: String!
      phone: String!
      email: String!
    ): Contact
  }
`;

module.exports = typeDefs;
