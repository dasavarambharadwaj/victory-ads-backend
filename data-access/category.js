module.exports = class CustomerCollection {
  async getCategories(searchString) {
    let data = [];
    searchString = searchString ? searchString : ""
    data = await new Promise((resolve,reject)=>{
        connection.query("call victory_ads_db.getCategoriesByName(?)", [searchString], function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(JSON.stringify(result)));
            }
        });
    })
    return data;
  }
};