async function beers(parent, args, context, info) {
    return await context.prisma.beer.findMany();
}

module.exports = {
    beers,
};
