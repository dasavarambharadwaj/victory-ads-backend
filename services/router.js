const Customer=require('../controllers/customer');
module.exports = class Routes {
    customer=new Customer();
    constructor(app) {

        app.get("/customers",this.customer.getCustomers)

    }
}