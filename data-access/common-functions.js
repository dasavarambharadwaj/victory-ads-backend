module.exports = {
  async getAllData(database, collection) {
    try {
      let db = client.db(database);
      let collectionData = db.collection(collection);
      let findResult = await collectionData.find({}).toArray();
      return findResult;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  async getDataByQuery(database, collection, query) {
    try {
      let db = client.db(database);
      let collectionData = db.collection(collection);
      let findResult = await collectionData.find(query).toArray();
      return findResult;
    } catch (err) {
      console.log(err);
      return [];
    }
  },
  async addDataToCollection(database, collection, data) {
    try {
      let db = client.db(database);
      let collectionData = db.collection(collection);
      let findResult = await collectionData.insertOne(data);
      return findResult;
    } catch (err) {
      console.log(err);
      return "Some Error Occured";
    }
  },
};
