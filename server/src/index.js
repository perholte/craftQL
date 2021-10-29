const fs = require('fs');
const path = require('path');
const { ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const Beer = require('./resolvers/Beer');

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8');

const resolvers = {
    Query,
    Mutation,
    Beer,
};

const prisma = new PrismaClient();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        prisma,
    },
    playground: false,
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
