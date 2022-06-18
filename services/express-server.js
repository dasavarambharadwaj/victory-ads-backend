const express = require("express");
const Routes = require("./router");
const https = require("https");
const fs = require("fs");
var cors = require("cors");
module.exports = class Server {
  constructor(port, originAddress) {
    this.app = express();
    this.port = port;
    this.initializeMiddleWares(originAddress);
    this.initializeRoutes();
  }
  initializeMiddleWares(originAddress) {
    this.app.use(
      cors({
        origin: originAddress,
        optionsSuccessStatus: 200,
      })
    );
    this.app.use(express.json());
  }
  initializeRoutes() {
    this.routes = new Routes(this.app);
  }
  start() {
    if (process.env.SERVER === "prod") {
      var options = {
        key: fs.readFileSync(
          "/etc/letsencrypt/live/victoryads-srd.in/privkey.pem"
        ),
        cert: fs.readFileSync(
          "/etc/letsencrypt/live/victoryads-srd.in/fullchain.pem"
        ),
      };
      https.createServer(options, this.app).listen(this.port, () => {
        console.log("Server running at port: " + this.port);
      });
    } else {
      this.app.listen(this.port, () => {
        console.log("Server running at port: " + this.port);
      });
    }
  }
};
