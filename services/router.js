// const Customer=require('../controllers/customer');
const Category = require('../controllers/category')
const Location = require('../controllers/location')
const Business = require('../controllers/business')
module.exports = class Routes {
    category=new Category()
    location = new Location()
    business = new Business()
    constructor(app) {
        app.get("/categories",this.category.getCustomers)
        app.get("/locations",this.location.getLocations)
        app.get("/businessByCategory",this.business.getBusinessListByCategory)
        app.get("/businessDetails",this.business.getBusinessDetailsById)
    }
}