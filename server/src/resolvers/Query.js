const { parseBeer, mapOrdering } = require('./utils');

async function beers(parent, args, context, info) {
    const { filter, skip, take, orderBy } = args;

    const where = filter
        ? {
              OR: [
                  { Name: { contains: filter.toLowerCase().trim() } },
                  { Type_BeerToType: { Name: { contains: filter } } },
                  { Brand_BeerToBrand: { Name: { contains: filter } } },
              ],
          }
        : {};
    return (
        await context.prisma.beer.findMany({
            where,
            include: { Type_BeerToType: true, Brand_BeerToBrand: true },
            take: take || 20,
            skip,
            orderBy: mapOrdering(orderBy),
        })
    ).map(parseBeer);
}

module.exports = {
    beers,
};
