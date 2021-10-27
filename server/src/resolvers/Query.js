async function beers(parent, args, context, info) {
    const { filter, skip, take, orderBy } = args;
    console.log(orderBy);
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
        orderBy,
    });
}

module.exports = {
    beers,
};
