//Trích xuất req.url và req.method rồi in ra

const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  console.log(`User dang truy cap URL: ${req.url} - Method: ${req.method}`);

  if (req.url === "/" && req.method === "GET") {
    console.log(`Get / successfully`);
    res.writeHead(200, { "content-type": "text/html" });
    res.end();
  } else if (req.url === "/user" && req.method === "POST") {
    console.log(`Post /user successfully`);
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      res.writeHead(200, { "content-type": "text/html" });
      res.end();
    });
  } else if (req.url === "/user/id" && req.method === "PUT") {
    console.log(`Put /user/id successfully`);
    res.writeHead(200, { "content-type": "text/html" });
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end();
  }
});
server.listen(PORT, function (err) {
  if (err) console.log("Error: ", err);
  else console.log(`Server running on port ${PORT}`);
});
