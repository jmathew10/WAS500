const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request);
  response.end();
});

server.listen(8888);
