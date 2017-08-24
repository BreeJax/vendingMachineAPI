const express = require("express")
const customer = express.Router()
const models = require("../models")

customer.get("/api/customer/items", function(req, res) {
  models.Items
    .findAll()
    .then(items => {
      res.json(items)
    })
    .catch(err => {
      console.log(err)
    })
})

//need to find a way of saying ()
customer.post("/api/customer/items/:itemId/purchases", (req, res) => {
  models.Items.findById(req.params.itemId).then(item => {
    if (req.body.quantity >= 1) {
      models.Items.update()
    }
    let changeBack = req.body.amount - item.itemCost
    const purchase = models.Purchases.build({
      moneyInMachine: item.itemCost,
      itemId: item.id,
      purchasedAt: Date.now()
    })

    purchase.save().then(moneyReturnToUser => {
      res.json(moneyReturnToUser)
    })
  })
})

module.exports = customer
