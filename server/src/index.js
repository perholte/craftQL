/*
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const fs = require('fs');
const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const http = require('http');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const resolvers = {
    Query,
    Mutation,
};

async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: {
            prisma,
        },
    });

    await server.start();

    const app = express();
    server.applyMiddleware({ app, cors: false });

    const httpServer = http.createServer(app);

    await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

    console.log('🚀 Server ready at http://localhost:4000/');

    return { server, app };
}

startApolloServer();

const { ApolloServer } = require('apollo-server');
const path = require('path');
*/
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
    playground: true,
    cors: {
        origin: '*',
        credentials: true,
    },
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
