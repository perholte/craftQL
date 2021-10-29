function parseOrderBy(orderBy) {
    const key = Object.keys(orderBy)[0];
    switch (key) {
        case 'name':
            return orderBy;
        case 'abc':
            return orderBy;
        case 'type':
            return { type: { name: orderBy.type } };
        case 'brand':
            return { brand: { name: orderBy.brand } };
        default:
            return {};
    }
}

module.exports = {
    parseOrderBy,
};
