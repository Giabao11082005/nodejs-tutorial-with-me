const http = require("http");
const PORT = 8080;

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("Hello World");
    res.end();
  })
  .listen(PORT, function () {
    console.log(`Server running on port ${PORT}`);
  });
