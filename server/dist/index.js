"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var schema_1 = __importDefault(require("./schema"));
var sql_1 = require("./sql");
// const { ApolloServer } = require('apollo-server')
// const { typeDefs } = require('./schema')
var resolvers = {
    Query: {
        beers: function () { return (0, sql_1.getBeers)(); },
    },
};
try {
    var server = new apollo_server_1.ApolloServer({ typeDefs: schema_1.default, resolvers: resolvers });
    server.listen().then(function (_a) {
        var url = _a.url;
        return console.log("Server is running on " + url);
    });
    // server.listen().then(() => {
    //     console.log(`
    //     🚀  Server is running!
    //     🔉  Listening on port 4000
    //     📭  Query at https://studio.apollographql.com/dev
    //     `)
    // })
}
catch (e) {
    console.log(e);
}
