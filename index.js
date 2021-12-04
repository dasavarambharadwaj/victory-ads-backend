require('dotenv').config({path:__dirname+"/.env"})
const expressServer = require('./services/express-server')
const ConnectDB = require("./services/connect-db");
(async () => {
  let connectDB = new ConnectDB();
  let connectionEstablished = await connectDB.testConnection();
  if (connectionEstablished) {
    global.client = connectDB.client;
    let server = new expressServer(
      process.env.PORT_NUMBER,
      process.env.ORIGIN_ADDRESS
    );
    server.start();
  } else {
    console.log("Error while establishing connection.");
  }
})();
