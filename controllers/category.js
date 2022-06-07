const categoryData = require("../data-access/category")
const object = new categoryData();
module.exports = class Customer {
  async getCustomers(req, res, next) {
    let result = await object.getCategories(req.query?.search);
    res.send(result);
  }
};