//Xử lý nhiều đường dẫn (route): /, /about, /contact trả về nội dung khác nhau

const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Welcome to Home Page");
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Welcome to About");
  } else if (url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("Welcome to Contact");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>404 ot Found</h1>");
  }
});

server.listen(PORT, function (err) {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
