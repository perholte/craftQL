const { parseBeer } = require('./utils');

async function rateBeer(parent, args, context, info) {
    // Does the beer exist, if not return undefined
    const BeerID = parseInt(args.beerID);
    const rating = parseInt(args.rating);
    const beer = await context.prisma.beer.findUnique({
        where: { BeerID },
        include: { Type_BeerToType: true, Brand_BeerToBrand: true },
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
    const ratingForBeer = await context.prisma.review.aggregate({
        _avg: { Stars: true },
        where: { Beer: BeerID },
    });
    beer['Review'] = parseFloat(ratingForBeer['_avg']['Stars']);
    return parseBeer(beer);
}

module.exports = {
    rateBeer,
};
