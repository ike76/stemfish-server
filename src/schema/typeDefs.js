const gql = require("graphql-tag")

const typeDefs = gql`
  type Query {
    allSongs: [Song]
    user(userID: ID!): User
  }
  type Mutation {
    createSong(title: String!, bpm: Int): Song
  }
  type Song {
    id: ID!
    title: String!
    bpm: Int
    admin: User
  }
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    songs: [Song]
  }
`

module.exports = { typeDefs }
