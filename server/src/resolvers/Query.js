async function beers(parent, args, context, info) {
    const { filter, skip, take } = args;
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
    });
}

module.exports = {
    beers,
};
