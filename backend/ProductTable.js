const Product = require("./Product");

class ProductTable {
  constructor() {
    this.products = {};
    this.sortedBy = Object.freeze({
      BEST_SELLING: "bestSelling",
      BEST_RATING: "bestRating",
      LEAST_RETURNED: "leastReturned",
    });
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

    const { BEST_SELLING, BEST_RATING, LEAST_RETURNED } = this.sortedBy;

    switch (sortedBy) {
      case BEST_SELLING:
        return allProducts
          .sort((a, b) => (a.orders < b.orders ? 1 : -1))
          .slice(0, 10);
      case BEST_RATING:
        return allProducts
          .sort((a, b) => (a.rating < b.rating ? 1 : -1))
          .slice(0, 10);
      case LEAST_RETURNED:
        return allProducts
          .sort((a, b) => (a.returns > b.returns ? 1 : -1))
          .slice(0, 10);
      default:
        return allProducts;
    }
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
