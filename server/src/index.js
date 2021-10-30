const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Beer = require('./resolvers/Beer');

// Schema loaded from the schema file
const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8');

const resolvers = {
    Query,
    Mutation,
    Beer,
};

// Global instance of the prisma client
const prisma = new PrismaClient();

// Global instance of the apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        prisma,
    },
    playground: true,
    cors: {
        origin: '*',
        credentials: true,
    },
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
