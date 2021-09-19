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

class ProductTable {
  constructor() {
    this.products = {};
    this.sortedBy = new Set(["bestSelling", "bestRating", "leastReturned"]);
  }

  create(name, price) {
    const product = new Product(name, price);
    this.products[product.id] = { ...product };

    return this.products[product.id];
  }

  delete(id) {
    if (this.products[id]) {
      const { name } = this.products[id];
      delete this.products[id];
      return { message: `${name} has been deleted` };
    }

    throw new Error(`product with id: ${id} not found`);
  }

  getProduct(id) {
    if (this.products[id]) {
      return {
        product: { id, ...this.products[id] },
      };
    }

    return undefined;
  }

  getProducts(sortedBy) {
    const allProducts = Object.entries(this.products).map(([key, value]) => ({
      id: key,
      ...value,
    }));

    if (sortedBy && this.sortedBy.has(sortedBy)) {
      switch (sortedBy) {
        case "bestSelling":
          return allProducts
            .sort((a, b) => (a.orders < b.orders ? 1 : -1))
            .slice(0, 10);
        case "bestRating":
          return allProducts
            .sort((a, b) => (a.rating < b.rating ? 1 : -1))
            .slice(0, 10);
        case "leastReturned":
          return allProducts
            .sort((a, b) => (a.returns > b.returns ? 1 : -1))
            .slice(0, 10);
        default:
          return allProducts;
      }
    }

    return allProducts;
  }

  update({ id, ...rest }) {
    if (this.products[id]) {
      this.products[id] = { ...this.products[id], ...rest };
      return {
        message: `${this.products[id].name} has been updated`,
        product: { id, ...this.products[id] },
      };
    }

    throw new Error(`product with id: ${id} not found`);
  }
}

module.exports = ProductTable;
