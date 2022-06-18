// const Customer=require('../controllers/customer');
const Category = require("../controllers/category");
const Location = require("../controllers/location");
const Business = require("../controllers/business");
const Contact = require("../controllers/contact");
module.exports = class Routes {
  category = new Category();
  location = new Location();
  business = new Business();
  contact = new Contact();
  constructor(app) {
    app.get("/categories", this.category.getCustomers);
    app.get("/locations", this.location.getLocations);
    app.get("/businessByCategory", this.business.getBusinessListByCategory);
    app.get("/businessDetails", this.business.getBusinessDetailsById);
    app.get("/search", this.business.search);
    app.get("/getImagesByBusinessId", this.business.getImages);
    app.get("/image/:name", this.business.image);
    app.post("/contactUs", this.contact.saveContactInfo);
  }
};
