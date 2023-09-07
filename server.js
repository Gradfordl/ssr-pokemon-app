const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const pokemon = require("./models/pokemon")


app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>")
})

app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})