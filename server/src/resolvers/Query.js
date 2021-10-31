const { parseOrderBy, parseFilter } = require('./utils');

/**
 *  Resolver for the beers endpoint
 * @param {previous resolver} parent
 * @param {user input} args
 * @param {application context} context
 * @returns a list of beers according to the requests arguments
 */
async function beers(parent, args, context) {
    const { filter, skip, take, orderBy } = args;
    const where = parseFilter(filter);
    if (orderBy && Object.keys(orderBy).includes('rating')) {
        return beersSortedByRating(context.prisma, args);
    } else {
        return context.prisma.beer.findMany({
            where,
            skip: skip || undefined,
            take: take || undefined,
            orderBy: orderBy ? parseOrderBy(orderBy) : undefined,
        });
    }
}

/**
 * We need this method because the rating for each beer is an aggregated value
 * from the Review table. This function performs joins on the Beer, Review, Brand
 * and Type tables. Then groups each beer with its associated reviews, and lastly
 * aggregates the average value for rating.
 *
 * @param {*} prisma
 * @param {*} param1
 * @returns
 */
async function beersSortedByRating(prisma, { filter, skip, take, orderBy }) {
    // filter = filter ? filter : Prisma.empty;
    skip = skip ? skip : 0;
    take = take ? take : 5;
    if (orderBy.rating && orderBy.rating === 'desc') {
        return prisma.$queryRaw`
            SELECT Beer.id AS id, Beer.name AS name, Beer.abv, Brand.name AS brand, Type.name AS type, AVG(Review.rating) AS rating
                FROM Beer
                    JOIN Review ON Beer.id = Review.beerId
                    JOIN Brand ON Beer.brandId = Brand.id
                    JOIN Type ON Beer.typeId = Type.id
                    GROUP BY Beer.id, Review.beerId
                    ORDER BY Rating DESC
                    LIMIT ${take}
                    OFFSET ${skip};`;
    } else {
        return prisma.$queryRaw`
            SELECT Beer.id AS id, Beer.name AS name, Beer.abv, Brand.name AS brand, Type.name AS type, AVG(Review.rating) AS rating
                FROM Beer
                    JOIN Review ON Beer.id = Review.beerId
                    JOIN Brand ON Beer.brandId = Brand.id
                    JOIN Type ON Beer.typeId = Type.id
                    GROUP BY Beer.id, Review.beerId
                    ORDER BY Rating ASC
                    LIMIT ${take}
                    OFFSET ${skip};`;
    }
}

module.exports = {
    beers,
};
