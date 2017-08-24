const express = require("express")
const vendor = express.Router()
const models = require("../models")

console.log("hello again")

vendor.post("/api/vendor/items", function(req, res) {
  const newItem = models.Items.build({
    nameOfItem: req.body.nameOfItem,
    itemCost: req.body.itemCost,
    quantity: req.body.quantity
  })

  newItem
    .save()
    .then(databaseSavedItem => {
      res.json(newItem)
    })
    .catch(err => {
      console.log(err)
    })
})

vendor.put("/api/vendor/items/:id", function(req, res) {
  const id = parseInt(req.params.id)
  console.log(id + " this is id")
  const updateItem = models.Items
    .update(
      {
        nameOfItem: req.body.nameOfItem,
        itemCost: req.body.itemCost,
        quantity: req.body.quantity
      },
      {
        where: { id: id }
      }
    )
    .then(databaseSavedItem => {
      res.json(databaseSavedItem)
    })
    .catch(err => {
      console.log(err)
    })
})

// PUT /api/vendor/items/:itemId - update item quantity, description, and cost

// GET /api/vendor/purchases - get a list of all purchases with their item and date/time
// GET /api/vendor/money - get a total amount of money accepted by the machine

// vendor.get("/api/vendor/money", function (req, res){
//   const moneyAmount = models.
// })

module.exports = vendor
