require('dotenv').config({path:__dirname+"/.env"})
const expressServer = require('./services/express-server')
let server = new expressServer(process.env.PORT_NUMBER, process.env.ORIGIN_ADDRESS);
server.start();