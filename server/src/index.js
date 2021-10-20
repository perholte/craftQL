import { ApolloServer } from 'apollo-server';

const typeDefs = `
  type Query {
    beers: [Beer!]!
  }

  type Mutation {
    rateBeer(id: ID!, rating: Int!): 
  }

  type Beer {
    id: ID!
    brand: String!
    name: String!
    type: String!
    strength: Float!
    rating: Float!
  }
`;

const resolvers = {
    Query: {
        info: () => `This is info`,
        beers: () => [],
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
