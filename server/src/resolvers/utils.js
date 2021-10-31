/**
 *
 * @param {user input} orderBy
 * @returns an object to be used by prisma to sort the output
 */
function parseOrderBy(orderBy) {
    const key = Object.keys(orderBy)[0];
    switch (key) {
        case 'name':
            return orderBy;
        case 'abv':
            return orderBy;
        case 'type':
            return { type: { name: orderBy.type } };
        case 'brand':
            return { brand: { name: orderBy.brand } };
        default:
            return {};
    }
}

/**
 * 
 * @param {*} filter 
 * @returns an object to be used by prisma to filter the output
 */
function parseFilter(filter) {
    if (!filter) {
        return {};
    }
    const { value, field } = filter;
    switch (field) {
        case 'name':
            return { name: { contains: value } };
        case 'brand':
            return { brand: { is: { name: { contains: value } } } };
        case 'type':
            return { type: { is: { name: { contains: value } } } };
        case 'all':
            return {
                OR: [
                    { name: { contains: value } }, 
                    { brand: { is: { name: { contains: value } } } }, 
                    { type: { is: { name: { contains: value } } } }
                ]
            };
        default:
            return {};
    }
}

module.exports = {
    parseOrderBy,
    parseFilter,
};
