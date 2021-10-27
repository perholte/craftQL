async function rateBeer(parent, args, context, info) {
    const { beerId, rating } = args;
    const beerIdInt = parseInt(beerId);
    const beer = await context.prisma.beer.findUnique({
        where: {
            id: beerIdInt,
        },
    });
    if (!beer) {
        throw Error('No beer with this id');
    }
    const newReview = await context.prisma.review.create({
        data: {
            beerId: beerIdInt,
            rating,
        },
    });
    return await context.prisma.beer.findUnique({
        where: {
            id: newReview.beerId,
        },
    });
}

module.exports = {
    rateBeer,
};
