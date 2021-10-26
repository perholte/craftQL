const { parseBeer, mapOrdering, sortByRating } = require('./utils');

async function beers(parent, args, context, info) {
    let { filter, skip, take, orderBy } = args;
    let where = filter
        ? {
              OR: [
                  { Name: { contains: filter.toLowerCase().trim() } },
                  { Type_BeerToType: { Name: { contains: filter } } },
                  { Brand_BeerToBrand: { Name: { contains: filter } } },
              ],
          }
        : {};
    let queryParams = {
        where,
        include: { Type_BeerToType: true, Brand_BeerToBrand: true, _count: true, Review: true },
        skip,
        orderBy: mapOrdering(orderBy),
    };
    if (orderBy && Object.keys(orderBy)[0] == 'rating') {
        queryParams['where'] = { NOT: [{ Review: { none: {} } }], ...where };
        return sortByRating(
            (await context.prisma.beer.findMany(queryParams)).map(parseBeer),
            orderBy['rating'] == 'asc',
        ).slice(0, take);
    } else {
        return (await context.prisma.beer.findMany({ take: take, ...queryParams })).map(parseBeer);
    }
}

module.exports = {
    beers,
};
