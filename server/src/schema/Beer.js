module.exports.createBeerSchema = (gql) => {
    return gql`
        type Query {
            beers: [Beer!]!
        }  
        type Beer {
            id: ID!
            brand: String!
            name: String!
            type: String!
            strength: Float!
            rating: Float!
        }
    `
}

module.exports.createBeerResolver = (database, Operation, withFilter, pubsub) => {
    return {
        Query: {
            beers: async () => {
                console.log("get beers")
                return []
            }
        }
    }
}