const { UserInputError } = require('apollo-server-errors');

/**
 *  Resolver for the rateUser endpoint
 * @param {contains the user input} args
 * @param {application context for accessing prisma} context
 * @returns the beer with the id given by the user with an updated rating or null if the beer doesn't exist
 */
async function rateBeer(parent, args, context) {
    const { beerId, rating } = args;
    if (rating < 1 || rating > 5) {
        throw new UserInputError('Rating must be between 1 and 5');
    }
    const beerIdInt = parseInt(beerId);
    const beerExists = await context.prisma.beer.findUnique({
        where: {
            id: beerIdInt
        },
    }) != undefined;
    if (!beerExists) {
        throw new UserInputError('No beer with this id');
    }

    const newReview = await context.prisma.review.create({
        data: {
            beerId: beerIdInt,
            rating,
        },
    });

    return context.prisma.beer.findUnique({
        where: {
            id: newReview.beerId,
        },
    });
}

module.exports = {
    rateBeer,
};
