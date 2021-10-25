const { gql } = require('apollo-server')

const typeDefs = gql`
  "Query"
  type Query {
      beers: [Beer!]!
  }  
  "Beer" 
  type Beer {
    id: ID!
    brand: String!
    name: String!
    type: String!
    strength: Float!
    rating: Float!
  }
`
// ""
// type Mutation {
//   rateBeer(id: ID!, rating: Int!): 
// } 

// module.exports.typeDefs = typeDefs
export default typeDefs
