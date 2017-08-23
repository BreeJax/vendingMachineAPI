const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const routes = require("./routes/router")

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.engine("mustache", mustacheExpress())

app.set("views", path.join(__dirname, "templates"))
app.set("view engine", "mustache")
app.use(express.static("public"))

app.use(routes)

app.listen(3000, () => {
  console.log("I've got the magic in me!")
})
