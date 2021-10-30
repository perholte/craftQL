// Resolver for the brand attribute of a beer
async function brand(parent, args, context) {
    return (await context.prisma.beer.findUnique({ where: { id: parent.id } }).brand()).name;
}

// Resolver for the type attribute of a beer
async function type(parent, args, context) {
    return (await context.prisma.beer.findUnique({ where: { id: parent.id } }).type()).name;
}

// Resolver for the rating attribute of a beer
// Calculates the average of all reviews belonging to a beer
async function rating(parent, args, context) {
    return (
        await context.prisma.review.aggregate({
            _avg: {
                rating: true,
            },
            where: {
                beerId: parent.id,
            },
        })
    )._avg.rating;
}

module.exports = {
    brand,
    type,
    rating,
};
