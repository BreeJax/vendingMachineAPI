"use strict"

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.addConstraint("Purchases", ["itemId"], {
      type: "FOREIGN KEY",
      name: "purchases_itemId_fk",
      references: {
        //Required field
        table: "Items",
        field: "id"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
    })
    //cascade means to update that/delete that thing that is being linked
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.removeConstraint("Purchases", "purchases_itemId_fk")
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
}
