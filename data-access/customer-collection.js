let ConnectDB = require('./connect-mongodb')
module.exports = class CustomerCollection {
    async getCustomersData(){
        let connection = new ConnectDB();
        let data = connection.getAllData("victory_ads","customers");
        return data;
    }
}