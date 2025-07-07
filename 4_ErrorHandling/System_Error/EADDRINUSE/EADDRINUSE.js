//EADDRINUSE: địa chỉ đã được sử dụng
const http = require("http");
const PORT = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("Test ERROR SYSTEM: EADDRINUSE");
  res.end();
});

server.listen(PORT, function (err) {
  if (err) {
    console.log("Server fail: ", err);
  }
  console.log(`Server running on port${PORT}`);
});
