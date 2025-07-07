const http = require("http");
const PORT = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("Test ERROR SYSTEM: EADDRINUSE - 1");
  res.end();
});

server.listen(PORT, function (err) {
  if (err) {
    console.log("Error: ", err);
  }
  console.log(`Server running on port ${PORT}`);
});
