//Tạo router trả về dữ liệu động dựa theo query string, ví dụ: /hello?name=Bao

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  console.log(`Server running URL: ${req.url}`);
});

server.listen(PORT, function (err) {
  if (err) console.log("Error: ", err);
  else console.log(`Server running on port ${PORT}`);
});
