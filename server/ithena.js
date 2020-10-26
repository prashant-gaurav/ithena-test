const http = require('http');
const app = require('./routes');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log(`||------> Ithena API is running on port no: ${port} <------||`);
