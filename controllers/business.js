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
  async getImages(req, res, next) {
    let result = await object.getImages(req.query?.business_id);
    res.send(result);
  }
  async image(req, res, next) {
    var options = {
      root: './images',
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }
    var fileName = req.params.name
    res.sendFile(fileName, options, function (err) {
      if (err) {
        console.log(err)
      } else {
        console.log('Sent:', fileName)
      }
    })
  }
};