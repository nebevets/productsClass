const { getFormattedUUID } = require("./helpers");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.orders = 0;
    this.returns = 0;
    this.rating = 0;
    this.id = getFormattedUUID();
  }
}

module.exports = Product;
