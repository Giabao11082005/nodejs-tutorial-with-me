//Xây dựng router thủ công: xử lý nhiều endpoint mà không dùng Express

const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  const url = req.url;

  if (url === "/" || url === "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end();
  } else if (url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("This is About Page");
  } else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("This is my About Page");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404 Not Found");
  }
});

server.listen(PORT, function (err) {
  if (err) console.log("Error: ", err);
  else console.log(`Server running on port ${PORT}`);
});
