const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const jsxViewEngine = require("jsx-view-engine");
const pokemon = require("./models/pokemon")


app.set("views", "./views");
app.set("view engine", "jsx");

app.engine("jsx", jsxViewEngine());

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>")
})

app.get("/pokemon", (req, res) => {
    res.render( "Index", { pokemon } )
})

app.get("/pokemon/:id", (req, res) => {
    res.render("Show", { pokemon: pokemon[req.params.id]})
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})