const {
  getAllData,
  getDataByQuery,
  addDataToCollection,
} = require("./common-functions");
const dbDetails = require("../static/databaseConfig.json");
var ObjectId = require("mongodb").ObjectId;
module.exports = class CustomerCollection {
  async getCustomersData(searchString) {
    let data = [];
    if (!searchString) {
      data = await getAllData(dbDetails.databaseName, dbDetails.customer);
    } else {
      data = await getDataByQuery(dbDetails.databaseName, dbDetails.customer, {
        $or: [
          { name: { $regex: searchString, $options: "i" } },
          { category: { $regex: searchString, $options: "i" } },
        ],
      });
    }
    return data;
  }
  async getCustomerDataById(id) {
    let data = [];
    if (id) {
      let objId = new ObjectId(id);
      data = await getDataByQuery(dbDetails.databaseName, dbDetails.customer, {
        _id: objId,
      });
    }
    return data;
  }
  async addCustomer(customerData) {
    let data;
    if (customerData) {
      data = await addDataToCollection(
        dbDetails.databaseName,
        dbDetails.tempCustomer,
        customerData
      );
    }
    return data;
  }
};
