module.exports = class CustomerCollection {
  async getCategories(searchString) {
    let data = [];
    searchString = searchString ? searchString : ""
    data = await new Promise((resolve)=>{
        debugger;
        connection.query("call victory_ads_db.getCategoriesByName(?)", [searchString], function (err, result) {
            if (err) {
                console.log("err:", err);
                throw err;
            } else {
                console.log("results:", result);
                resolve(result);
            }
        });
    })
    return data;
  }
};