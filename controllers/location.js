const LocationData = require("../data-access/location");
const object = new LocationData();
module.exports = class Location {
  async getLocations(req, res, next) {
    try {
      let result = await object.getLocations(req.query?.search);
      res.send(result);
    } catch (err) {
      res.next(err);
    }
  }
};
