const CustomerCollection = require("../data-access/customer-collection")
const collection = new CustomerCollection();
module.exports = class Customer {
  async getCustomers(req, res, next) {
    let result = await collection.getCustomersData(req.query?.search);
    res.send(result);
  }
  async getCustomerById(req, res, next) {
    let result = await collection.getCustomerDataById(req.query?.id);
    res.send(result);
  }
  async addCustomer(req, res, next) {
    console.log(req.body);
    let result = await collection.addCustomer(req.body);
    res.send(result);
  }
};