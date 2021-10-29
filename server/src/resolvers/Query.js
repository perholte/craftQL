const { parseOrderBy } = require('./utils');

async function beers(parent, args, context) {
    const { filter, skip, take, orderBy } = args;

    const where = filter
        ? {
              OR: [
                  { name: { contains: filter } },
                  { brand: { name: { contains: filter } } },
                  { type: { name: { contains: filter } } },
              ],
          }
        : {};

    const SORT_BY_RATING_QUERY =
        'SELECT Beer.name, Beer.abv, Brand.name, Type.name, AVG(Review.rating) AS Rating FROM Beer JOIN Review ON Beer.id = Review.beerId JOIN Brand ON Beer.brandId = Brand.id JOIN Type ON Beer.typeId = Type.idGROUP BY Beer.id, Review.beerIdORDER BY Rating ASC;';
    return await context.prisma.beer.findMany({
        where,
        skip,
        take,
        orderBy: parseOrderBy(orderBy),
    });
}

module.exports = {
    beers,
};
