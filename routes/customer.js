const express = require("express")
const customer = express.Router()
const models = require("../models")

// customer.get("/api/customer/items", (req, res) => {
//   console.log("hello This")
//   res.json(Items)
// })

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

//need to find o
customer.post("/api/customer/items/:itemId/purchases", (req, res) => {
  models.Items.findById(req.params.itemId).then(item => {
    if (item.quantity > 0 && req.body.amount >= item.itemCost) {
      let changeBack = req.body.amount - item.itemCost
      const purchase = models.Purchases.build({
        moneyInMachine: item.itemCost,
        itemId: item.id,
        purchasedAt: Date.now()
      })

      item.quantity -= 1
      item.save().then(item => {
        console.log("updated the inventory")
      })

      purchase.save().then(moneyReturnToUser => {
        res.json(moneyReturnToUser)
      })
    } else {
      res.json("sorry, no inventory")
    }
  })
})

module.exports = customer

// POST /api/customer/items/:itemId/purchases - purchase an item
