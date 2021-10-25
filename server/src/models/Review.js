module.exports.defineReview = (db, Sequelize) => {
    db.define('Review', {
        ReviewID: {
            type: Sequelize.BIGINT, 
            allowNull: false, 
        },
        Stars: {

        }
    }
}