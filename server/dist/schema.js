"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gql = require('apollo-server').gql;
var typeDefs = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  \"Query\"\n  type Query {\n      beers: [Beer!]!\n  }  \n  \"Beer\" \n  type Beer {\n    id: ID!\n    brand: String!\n    name: String!\n    type: String!\n    strength: Float!\n    rating: Float!\n  }\n"], ["\n  \"Query\"\n  type Query {\n      beers: [Beer!]!\n  }  \n  \"Beer\" \n  type Beer {\n    id: ID!\n    brand: String!\n    name: String!\n    type: String!\n    strength: Float!\n    rating: Float!\n  }\n"
    // ""
    // type Mutation {
    //   rateBeer(id: ID!, rating: Int!): 
    // } 
    // module.exports.typeDefs = typeDefs
])));
// ""
// type Mutation {
//   rateBeer(id: ID!, rating: Int!): 
// } 
// module.exports.typeDefs = typeDefs
exports.default = typeDefs;
var templateObject_1;
