const http = require('http');
const fs = require('fs');
const contents = fs.readFileSync(__dirname + '/index.html');
http.createServer((req, res) => {
    res.end(contents);
}).listen(3100);
