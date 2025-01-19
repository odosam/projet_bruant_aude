// models/card.js

module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define('Card', {
      nameCard: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numbersCard: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [16], 
        },
      },
      expMonth: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      expYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  
    return Card;
  };
  