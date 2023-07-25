// Import Classes Here
const Product = require("./classes/Product");
const Cart = require("./classes/Cart");
const Customer = require("./classes/Customer");

///
/// Product
///

// const carrots = new Product(
//   "Carrots",
//   4,
//   "Bushel of carrots that have been freshly harvested for you"
// );

// console.log(carrots.inStock);
// console.log(carrots.display());

///
/// Cart
///

const strawberries = new Product(
  "Strawberries",
  5,
  "The freshest fresas on the market"
);
const carrots = new Product("Carrots", 2, "Perfect for an afternoon snack");
const mangos = new Product("Mangos", 3, "The tastiest fruit you can buy");

const myCart = new Cart();
myCart.addProduct(strawberries);
myCart.addProduct(mangos);
console.log(myCart.products);
console.log(myCart.total);

myCart.removeProduct(1);
console.log(myCart.products);
console.log(myCart.total);

///
/// Customer
///

// DO NOT EDIT BELOW THIS LINE
try {
  module.exports = {
    Product,
  };
} catch (e) {}

try {
  module.exports = {
    Product,
    Cart,
  };
} catch (e) {}

try {
  module.exports = {
    Product,
    Cart,
    Customer,
  };
} catch (e) {}

try {
  module.exports = {
    Product,
    Cart,
    Customer,
    Auth,
  };
} catch (e) {}
