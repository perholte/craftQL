
function parseBeer(beer) {
    let rating = null
    if (beer["Review"].length > 0) {
        rating = beer["Review"].map(r => r["Stars"]).reduce((a, b) => a + b, 0) / parseFloat(beer["_count"]["Review"])
    }
    return {
            id: beer["BeerID"], 
            brand: beer["Brand_BeerToBrand"]["Name"], 
            name: beer["Name"], 
            type: beer["Type_BeerToType"]["Name"], 
            abv: beer["Volume"], 
            rating
    };
}

function mapOrdering(ordering) {
    if (!ordering) {
        return {Volume: 'desc'}
    }
    let column = Object.keys(ordering)[0]
    let ord = ordering[column]
    switch (column) {
        case 'brand':
            return {Brand_BeerToBrand: { Name: ord}}
        case 'type':
            return {Type_BeerToType: {Name: ord}}
        case 'name':
            return {Name: ord}
        case 'abv':
            return {Volume: ord}
        case 'rating':
            return {Review: { 
                _count: ord }
            }
        default:
            return {Volume: ord}
    }
}

function sortByRating(beers, asc) {
    let withRating = beers.filter(b => b["rating"] !== null)
    // only sort beers who have been reviewed with respect to rating
    return withRating.sort((a, b) => {
        const aRating = a["rating"]
        const bRating = b["rating"]
        let order = asc ? -1 : 1
        return (bRating - aRating) * order
    })
}

module.exports = {parseBeer, mapOrdering, sortByRating};
