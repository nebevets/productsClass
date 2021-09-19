const express = require("express");
const ProductTable = require("./Products");

const Amazon = new ProductTable();
const api = express();
const PORT = 9000;

api.use(express.json());

api.get("/products", ({ query: { sortedBy } }, res) => {
  try {
    const products = Amazon.getProducts(sortedBy);

    res.send({ products }).status(200);
  } catch (error) {
    res.send({ ...error }).status(500);
  }
});

api.patch("/products", ({ body }, res) => {
  try {
    const updatedProduct = Amazon.update({ ...body });

    res.send({ ...updatedProduct }).status(200);
  } catch (error) {
    res.send({ ...error }).status(402);
  }
});

api.post("/products", ({ body: { name, price } }, res) => {
  try {
    const product = Amazon.create(name, price);

    res.send({ product }).status(200);
  } catch (error) {
    res.send({ ...error }).status(402);
  }
});

api.listen(PORT, () => console.log(`listening on port: ${PORT}`));
