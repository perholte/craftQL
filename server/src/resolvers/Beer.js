async function brand(parent, args, context) {
    return await context.prisma.beer.findUnique({ where: { id: parent.id } }).brand();
}

async function type(parent, args, context, info) {
    return await context.prisma.beer.findUnique({ where: { id: parent.id } }).type();
}

async function rating(parent, args, context, info) {
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
