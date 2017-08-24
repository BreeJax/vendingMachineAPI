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

vendor.get("/api/vendor/purchases", function(req, res) {
  models.Purchases
    .findAll({ attributes: ["itemId", "purchasedAt"] })
    .then(purchases => {
      res.json(purchases)
    })
    .catch(err => {
      console.log(err)
    })
})

vendor.get("/api/vendor/money", function(req, res) {
  models.Purchases.sum("moneyInMachine").then(sum => {
    res.json(sum)
  })
})

module.exports = vendor
