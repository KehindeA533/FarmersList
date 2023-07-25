const Customer = require("./classes/Customer");

class Auth {
  constructor() {
    this.customers = [];
  }

  register(name, email, shippingAddress) {
    const customer = new Customer(name, email, shippingAddress);
    this.customers.push(customer);
  }

  login(email) {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].email === email) {
        return this.customers[i];
      }
    }
  }
}

module.exports = Auth;
