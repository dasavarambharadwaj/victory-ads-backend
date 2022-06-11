const BusinessData = require("../data-access/business")
const object = new BusinessData();
module.exports = class Location {
  async getBusinessListByCategory(req, res, next) {
    let result = await object.getBusinessListByCategory(req.query?.search,req.query?.location_id,req.query?.category_id);
    res.send(result);
  }
  async getBusinessDetailsById(req, res, next) {
    let result = await object.getBusinessDetailsById(req.query?.business_id);
    res.send(result);
  }
  async search(req, res, next) {
    let result = await object.search(req.query?.search, req.query?.location_id);
    res.send(result);
  }
};