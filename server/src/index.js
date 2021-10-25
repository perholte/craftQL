const { ApolloServer } = require('apollo-server');
const path = require('path');
const fs = require('fs');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8');

const resolvers = {
    Query,
    Mutation,
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        prisma,
    },
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
