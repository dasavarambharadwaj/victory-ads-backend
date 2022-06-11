module.exports = class BusinessCollection {
    async getBusinessListByCategory(searchString,location_id,category_id) {
      let data = [];
      searchString = searchString ? searchString : ""
      data = await new Promise((resolve,reject) => {
          connection.query("call victory_ads_db.getBusinessDetailsByCategory(?,?,?)", [searchString,location_id,category_id], function (err, result) {
              if (err) {
                  reject(err);
              } else {
                  resolve(JSON.parse(JSON.stringify(result)));
              }
          });
      })
      return data;
    }
    async getBusinessDetailsById(business_id) {
        let data = [];
        data = await new Promise((resolve,reject) => {
            connection.query("call victory_ads_db.getBusinessDetailsById(?)", [business_id], function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.parse(JSON.stringify(result)));
                }
            });
        })
        return data;
    }
    async search(searchString, location_id) {
        let data = [];
        data = await new Promise((resolve,reject) => {
            connection.query("call victory_ads_db.searchByLocation(?,?)", [searchString,location_id], function (err, result) {
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