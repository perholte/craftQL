async function brand(parent, args, context, info) {
    return context.prisma.beer.findUnique({ where: { id: parentId } }).brand();
}

module.exports = {
    brand,
};
