module.exports = (sequelize, Sequelize) => {
    const Catalogue = sequelize.define("catalogue", {
        ref: {
            type: Sequelize.STRING,
            primaryKey: true,
            allowNull: false,
        },
        prix: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: false
        },    
        motsCles: {
            type: Sequelize.ARRAY(Sequelize.STRING),
            allowNull: false
        },
        nom: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Catalogue;
};