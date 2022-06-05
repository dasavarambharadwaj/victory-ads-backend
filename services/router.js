// const Customer=require('../controllers/customer');
const Category = require('../controllers/category')
module.exports = class Routes {
    category=new Category();
    constructor(app) {
        app.get("/categories",this.category.getCustomers)

    }
}