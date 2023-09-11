require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const jsxViewEngine = require("jsx-view-engine");
const Pokemon = require("./models/pokemon");
const mongoose = require("mongoose");

//// database connection //////////////
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("Bingo bongo connected to Mongo");
  });
  //////////////////////////////////////////

app.set("views", "./views");
app.set("view engine", "jsx");

app.engine("jsx", jsxViewEngine());

app.use((req, res, next) => {
    console.log("Middleware");
    next();
  });

app.use(express.urlencoded({ extended: false }));

//root
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>")
})

//index
app.get("/pokemon", async (req, res) => {
    try {
        const foundPokemon = await Pokemon.find({});
        res.status(200).render("Index", { pokemon: foundPokemon });
      } catch (err) {
        res.status(400).send(err);
      }
})

//new
app.get("/pokemon/new", (req, res) => {
    res.render("New");
  });

//create
app.post("/pokemon/", async (req, res) => {
    try {
      const newPokemon = await Pokemon.create(req.body);
      res.status(201).redirect("/pokemon");
    } catch (err) {
      res.status(400).send(err);
    }
  });

  //show
app.get("/pokemon/:id", async (req, res) => {
    try {
        const foundPokemon = await Pokemon.findById(req.params.id);
        // console.log(foundPokemon);
        res.render("Show", {
          pokemon: foundPokemon,
        });
      } catch (err) {
        res.status(400).send(err);
      }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})