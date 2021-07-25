const express = require('express');
const Routes = require('./router')
module.exports=class Server {
    constructor(port){
        this.app=express();
        this.port=port;
    }
    initializeRoutes() {
        this.routes = new Routes(this.app)
    }
    start() {
        this.app.listen(this.port,()=>{
            console.log('Server running at port: ' + this.port);
        });
    }
}
