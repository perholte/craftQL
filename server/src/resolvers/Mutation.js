const { parseBeer } = require('./utils');

async function rateBeer(parent, args, context, info) {
    // Does the beer exist, if not return undefined
    const BeerID = parseInt(args.beerID);
    const rating = parseInt(args.rating);
    const beer = await context.prisma.$exists.beer({
        BeerID: BeerID,
    });
    if (!beer) {
        return undefined;
    }
    // Insert into review row with BeerID and rating
    await context.prisma.review.create({
        data: {
            Stars: rating,
            Beer: BeerID,
        },
    });
    // Return Beer object with updated rating value
    let ratingsForBeer = await context.prisma.review.aggregate({
        _avg: { Stars: true },
        where: { Beer: BeerID },
    });
    ratingsForBeer = ratingsForBeer['_avg']['Stars'];
    beer['Review'] = parseFloat(ratingsForBeer);
    return parseBeer(beer);
}

module.exports = {
    rateBeer,
};
