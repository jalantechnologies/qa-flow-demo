const http = require('http');

const appConfigEnv = process.NODE_CONFIG_ENV || 'development';

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end(`Hello from - ${appConfigEnv}`);
}

const server = http.createServer(requestListener);
server.listen(8080);
