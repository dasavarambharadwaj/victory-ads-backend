var mysql = require('mysql2');
module.exports = class ConnectDB {
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.HOST,
      port: parseInt(process.env.PORT),
      user: process.env.MY_SQL_USER,
      password: process.env.PASSWORD,
      database: process.env.DB
    });
  }
  async testConnection() {
    return await new Promise((resolve,reject)=>{
      this.connection.connect(function(err){
        if(err) {
          console.log("Connection failed")
          resolve(false)
        } else {
          console.log("Connection Succeeded")
          resolve(true)
        }
      });
    }) 
  }
};
