const { UserInputError } = require('apollo-server-errors');

async function rateBeer(parent, args, context, info) {
    const { beerId, rating } = args;

    if (rating < 1 || rating > 5) {
        throw new UserInputError('Rating must be between 1 and 5');
    }
    console.log(parent);

    const beerIdInt = parseInt(beerId);
    const beerExists = await context.prisma.$exists.beer({
        id: beerIdInt,
    });
    if (!beerExists) {
        throw new UserInputError('No beer with this id');
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
