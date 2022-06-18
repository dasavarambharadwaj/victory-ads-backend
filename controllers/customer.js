const CustomerCollection = require("../data-access/customer-collection");
const collection = new CustomerCollection();
module.exports = class Customer {
  async getCustomers(req, res, next) {
    try {
      let result = await collection.getCustomersData(req.query?.search);
      res.send(result);
    } catch (err) {
      res.next(err);
    }
  }
  async getCustomerById(req, res, next) {
    try {
      let result = await collection.getCustomerDataById(req.query?.id);
      res.send(result);
    } catch (err) {
      res.next(err);
    }
  }
  async addCustomer(req, res, next) {
    try {
      console.log(req.body);
      let result = await collection.addCustomer(req.body);
      res.send(result);
    } catch (err) {
      res.next(err);
    }
  }
};
