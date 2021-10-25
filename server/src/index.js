import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server'
import {
    createBeerResolver, createBeerSchema
} from './schema/Beer'
const { merge } = require('lodash');
const Op = require('sequelize').Op;

// const resolvers = {
//     Query: {
//         beers: () => {
//             return Brand.getAll()
//         },
//     },
// }
/**
 * Define database objects
 */
let beerSchema = createBeerSchema(gql);
let beerResolver = createBeerResolver(MySQLDataBase, Op, withFilter, pubsub);

const resolvers = merge(beerResolver)

const schema = makeExecutableSchema({
    typeDefs: [
        beerSchema
    ], 
    resolvers
})

const server = new ApolloServer({ schema })
 
server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
