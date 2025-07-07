//Đọc file HTML và trả về khi truy cập /home

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  const filePath = path.join(__dirname, "./index.html");

  if (req.url === "/home") {
    fs.readFile(filePath, function (err, data) {
      if (err) {
        if (err.code === "ENOENT") {
          res.writeHead(404, { "content-type": "text/html" });
          res.end("File doesn't exists");
        } else {
          res.writeHead(404, { "content-type": "text/html" });
          res.end("Error when read file");
        }
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(`Data: ${data}`);
      }
    });
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404 Not Found");
  }
});

server.listen(PORT, function (err) {
  if (err) console.log("Error: ");
  else console.log(`Server running on port ${PORT}`);
});
