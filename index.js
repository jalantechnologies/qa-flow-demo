const http = require('http');

const appConfigEnv = process.env.NODE_CONFIG_ENV || 'development';
const appHttpPort = process.env.PORT || 8080;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`Hello from - ${appConfigEnv}`);
}

const server = http.createServer(requestListener);
server.listen(appHttpPort);
