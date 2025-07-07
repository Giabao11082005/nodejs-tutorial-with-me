//.env
require("dotenv").config();
const http = require("http");
const { serialize } = require("v8");

const PORT = process.env.PORT;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.end("Test .env");
});

server.listen(PORT, function (err) {
  if (err) console.log("Error: ", err);
  else console.log(`Server running on port ${PORT}`);
});
