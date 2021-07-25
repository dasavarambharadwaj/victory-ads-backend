const {MongoClient} = require('mongodb');
module.exports=class ConnectDB {
    constructor(){
        this.client = new MongoClient(process.env.DB_URI)
    }
    async getAllData(database,collection) {
        try {
            await this.client.connect()
            let db = this.client.db(database)
            let collectionData = db.collection(collection)
            let findResult = await collectionData.find({}).toArray()
            return findResult;
        }
        catch(err) {
            console.log(err);
            return [];
        }
    }
}