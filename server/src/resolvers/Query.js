const parseBeer = require('./utils')

async function beers(parent, args, context, info) {
    let { filter, skip, take } = args
    const where = filter
        ? {
        OR: [
            { Name: { contains: filter.toLowerCase().trim() } },
            { Type_BeerToType: { Name: {contains: filter }} },
            { Brand_BeerToBrand: { Name: {contains: filter }} },
        ],
        } : {}
    return  (await context.prisma.beer.findMany(
        {   
            where, 
            include: {Type_BeerToType: true, Brand_BeerToBrand: true, _count: true}, 
            take: take || 15, 
            skip 
    })).map(parseBeer);
}

module.exports = {
    beers,
};