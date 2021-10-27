async function brand(parent, args, context, info) {
    return context.prisma.beer.findUnique({ where: { id: parent.id } }).brand();
}

async function type(parent, args, context, info) {
    return context.prisma.beer.findUnique({ where: { id: parent.id } }).type();
}

module.exports = {
    brand,
    type,
};
