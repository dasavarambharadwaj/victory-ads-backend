const { MongoClient } = require("mongodb");
module.exports = class ConnectDB {
  constructor() {
    this.client = new MongoClient(process.env.DB_URI);
  }
  async testConnection() {
    try {
      await this.client.connect();
      return true;
    } catch (err) {
      return false;
    }
  }
};
