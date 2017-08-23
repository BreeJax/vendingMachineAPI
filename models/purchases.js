'use strict';
module.exports = function(sequelize, DataTypes) {
  var Purchases = sequelize.define('Purchases', {
    itemId: DataTypes.INTEGER,
    purchasedAt: DataTypes.DATE,
    moneyInMachine: DataTypes.DECIMAL
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Purchases;
};