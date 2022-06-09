const LocationData = require("../data-access/location")
const object = new LocationData();
module.exports = class Location {
  async getLocations(req, res, next) {
    let result = await object.getLocations(req.query?.search);
    res.send(result);
  }
};