//Thiết lập Header Content-Type cho HTML, JSON, text

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  const fileJSON = path.join(__dirname, "./demo.json");
  const fileHTML = path.join(__dirname, "./index.html");
  const fileText = path.join(__dirname, "./demo.txt");

  fs.readFile(fileJSON, "utf-8", function (err, data) {
    if (err) {
      console.error("Error: ", err);
      res.writeHead(404, { "content-type": "application/json" });
      res.end("Fail");
    } else {
      console.log("Successfully. Data: ", data);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(data);
    }
  });

  fs.readFile(fileHTML, "utf-8", function (err, data) {
    if (err) {
      console.error("Error: ", err);
      res.writeHead(404, { "content-type": "text/html" });
      res.end(data);
    } else {
      console.log("Successfully. Data: ", data);
      res.writeHead(200, { "content-type": "text/html" });
      res.end("Successfully");
    }
  });

  fs.readFile(fileText, "utf-8", function (err, data) {
    if (err) {
      console.error("Error: ", err);
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("Fail");
    } else {
      console.log("Successfully. Data: ", data);
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(data);
    }
  });
});

server.listen(PORT, function (err) {
  if (err) console.log("Error: ", err);
  else console.log(`Server running on port ${PORT}`);
});
