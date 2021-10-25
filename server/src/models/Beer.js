const BEER_NAMES = `SELECT Name FROM Beer;`
const BEER = `SELECT BeerID, Beer.Name, Type.Name, Volume, Brand.Name FROM Beer join Type on Beer.Type=Type.TypeID JOIN Brand ON Beer.Brand=Brand.BrandID;`

module.exports.defineBeer = (db, Sequelize) => {
    db.define('Beer', {
        BeerID: {
            type: Sequelize.BIGINT, 
            allowNull: false
        }, 
        Name: {
            type: Sequelize.String, 
            allowNull: false
        }, 
        Type: {
            type: Sequelize.BIGINT, 
            allowNull: false
        }, 
        Volume: {
            type: Sequelize.String, 
            allowNull: false
        }, 
        Brand: {
            type: Sequelize.String, 
            allowNull: false
        }
    })
}