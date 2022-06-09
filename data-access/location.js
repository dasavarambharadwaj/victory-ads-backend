module.exports = class LocationCollection {
    async getLocations(searchString) {
      let data = [];
      searchString = searchString ? searchString : ""
      data = await new Promise((resolve,reject)=>{
          connection.query("call victory_ads_db.getLocationsByName(?)", [searchString], function (err, result) {
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