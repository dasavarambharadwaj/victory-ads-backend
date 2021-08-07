const ConnectDB = require('./connect-mongodb')
const dbDetails = require('../static/databaseConfig.json')
module.exports = class CustomerCollection {
    async getCustomersData(searchString){
        let connection = new ConnectDB();
        let data= [];
        if(!searchString) {
            data = await connection.getAllData(dbDetails.databaseName,dbDetails.customer);
        } else {
            data = await connection.getDataByTextSearch(dbDetails.databaseName,dbDetails.customer,searchString)
        }
        return data;
    }
}