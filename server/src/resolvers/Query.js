const parseBeer = require('./utils')

async function beers(parent, args, context, info) {
    return  (await context.prisma.beer.findMany({include: {Type_BeerToType: true, Brand_BeerToBrand: true, _count: true}}))
        .map(parseBeer);
}

module.exports = {
    beers,
};