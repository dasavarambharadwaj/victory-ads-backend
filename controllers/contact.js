const contactData = require("../data-access/contact");
const object = new contactData();
module.exports = class Contact {
  async saveContactInfo(req, res, next) {
    try {
      let result = await object.saveContactInfo(req.body);
      res.send(result);
    } catch (err) {
      res.next(err);
    }
  }
};
