function parseBeer(beer) {
    return {
        id: beer['BeerID'],
        brand: beer['Brand_BeerToBrand']['Name'],
        name: beer['Name'],
        type: beer['Type_BeerToType']['Name'],
        abv: beer['Volume'],
        rating: beer['Review'],
    };
}

function mapOrdering(ordering) {
    let column = Object.keys(ordering)[0];
    let ord = ordering[column];
    switch (column) {
        case 'brand':
            return { Brand_BeerToBrand: { Name: ord } };
        case 'type':
            return { Type_BeerToType: { Name: ord } };
        case 'name':
            return { Name: ord };
        case 'abv':
            return { Volume: ord };
        case 'rating':
            return { Review: { groupBy: {}, _avg: ord } };
        default:
            return { Volume: ord };
    }
}

module.exports = { parseBeer, mapOrdering };
