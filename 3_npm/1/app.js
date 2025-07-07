const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.write(
    "Create server node with CommonJs + test npm : npm int + setting package.json"
  );
  res.end();
});

server.listen(PORT, function (err) {
  if (err) {
    console.log("Server fail: ", err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
