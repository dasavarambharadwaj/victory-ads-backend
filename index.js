require('dotenv').config({path:__dirname+"/.env"})
console.log(process.env)
const expressServer = require('./services/express-server')
let server = new expressServer(3000);
server.initializeRoutes();
server.start();