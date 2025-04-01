const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000; 

const server = http.createServer(app);  //app = requestListener

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


//entry point of our project is server.js
//server.js is responsible for creating the server and listening on a specified port