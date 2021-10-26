async function type(parent, args, context, info) {
    return context.prisma.beer.findUnique({ where: { id: parentId } }).type();
}

module.exports = {
    type,
};
