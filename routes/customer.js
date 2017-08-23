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

module.exports = customer

// GET /api/customer/items - get a list of items
// POST /api/customer/items/:itemId/purchases - purchase an item
