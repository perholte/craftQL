
function parseBeer(beer) {
    console.log(beer)
    return {
            id: beer["BeerID"], 
            brand: beer["Brand_BeerToBrand"]["Name"], 
            name: beer["Name"], 
            type: beer["Type_BeerToType"]["Name"], 
            abv: beer["Volume"], 
            rating: beer["Review"]
    };
}

module.exports = parseBeer;
