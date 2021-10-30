const { parseOrderBy } = require('./utils');

/**
 *  Resolver for the beers endpoint
 * @param {previous resolver} parent
 * @param {user input} args
 * @param {application context} context
 * @returns a list of beers according to the requests arguments
 */
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

    return await context.prisma.beer.findMany({
        where,
        skip,
        take,
        orderBy: orderBy ? parseOrderBy(orderBy) : undefined,
    });
}

module.exports = {
    beers,
};
