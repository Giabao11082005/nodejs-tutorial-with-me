//Tạo một server đơn giản trả về "Hello World"

const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("Server basic");
  res.end();
});

server.listen(PORT, function (err) {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
