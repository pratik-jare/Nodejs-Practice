const helpers = require("./helper");
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("helo");
});

server.listen(3000);


const total = helpers.sum(10, 2);
console.log('total  : ', total);