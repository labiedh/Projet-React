const express = require("express");
var cors = require('cors');

const products =require('./products');

const app = express();

app.use(cors());

app.get("/products", (req, res) => {
    res.json(products);
   })

app.listen(9009, () => {
    console.log("Server running on port 9009");
   });
