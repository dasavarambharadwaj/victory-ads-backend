module.exports = class ContactCollection {
  async saveContactInfo(body) {
    let data = [];
    data = await new Promise((resolve, reject) => {
      connection.query(
        "call victory_ads_db.saveContactUsInfo(?,?,?,?)",
        [body.name, body.email, body.phone, body.query],
        function (err, result) {
          if (err) {
            reject(err);
          } else {
            resolve(JSON.parse(JSON.stringify(result)));
          }
        }
      );
    });
    return data;
  }
};
