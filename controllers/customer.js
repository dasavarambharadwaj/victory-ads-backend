const CustomerCollection = require("../data-access/customer-collection")
module.exports = class Customer {
    async getCustomers(req,res,next){
        var collection= new CustomerCollection();
        let result = await collection.getCustomersData(req.query?.search);
        res.send(result);
    }
}