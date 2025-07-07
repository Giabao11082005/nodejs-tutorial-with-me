//Tạo server trả về JSON response

const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  const urlRequest = req.url;
  const filePathJSON = path.join(__dirname, "./json.json");

  if (urlRequest === "/json") {
    fs.readFile(filePathJSON, "utf-8", function (err, data) {
      if (err) {
        console.error("Error: ", err);
        res.writeHead(500, { "content-type": "application/json" });
        res.end(JSON.stringify({ error: "Could not read file json" }));
      } else {
        console.log("Successfully");
        res.writeHead(200, { "content-type": "application/json" });
        res.end(data);
      }
    });
  } else if (urlRequest === "/") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end("Try file/json now");
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ error: "404 Not Found" }));
  }
});

server.listen(PORT, function (err) {
  if (err) console.log("Error: ", err);
  else console.log(`Server running on port ${PORT}`);
});
