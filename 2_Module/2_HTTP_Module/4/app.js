//Trả về status code 404 khi truy cập sai đường dẫn

const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  const url = req.url;

  if (url === "/" || url === "/about" || url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Welcome to my page");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404 Not Found");
  }
});

server.listen(PORT, function (err) {
  if (err) console.log("Error: ", err);
  else console.log(`Server running on port ${PORT}`);
});
