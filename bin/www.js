const http = require('http');
const serverHandler = require("../app");
const Server = http.createServer(serverHandler);
const port = 9227;
Server.listen(port,()=>{
    console.log(`server running at port ${port}...`);
});