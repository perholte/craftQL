async function beers(parent, args, context, info) {
    return context.prisma.beer.findMany();
}

module.exports = {
    beers,
};
