//Trả về file HTML tĩnh khi người dùng truy cập /home

const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  //duong dan tuyet doi toi file html
  const filePath = path.join(__dirname, "./index.html");

  //kiem tra dieu kien
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text.html" });
    res.write("Welcome to Home Page");
    res.end();
  } else if (req.url === "/home") {
    res.writeHead(200, { "content-type": "text/html" });

    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        console.err("Error: ", err);
        res.writeHead(500, { "content-type": "text/html" });
        res.end();
      } else {
        console.log("Successfully: ");

        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>404 Not Found</h1>`);
    res.end();
  }
});

server.listen(PORT, function (err) {
  if (err) {
    console.log("Error: ", err);
  } else console.log(`Server running on port ${PORT}`);
});
