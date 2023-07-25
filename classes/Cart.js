class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  addProduct(product) {
    this.products.push(product);
    this.total++;
  }
  removeProduct(product) {
    this.products.pop(product);
    this.total--;
  }
}

module.exports = Cart;
