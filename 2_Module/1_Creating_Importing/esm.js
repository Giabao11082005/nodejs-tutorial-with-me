import http from "http";
const PORT = 8080;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("Hello every one");
  res.end();
});

server.listen(PORT, function (err) {
  if (err) throw new Error("Error");
  console.log(`Server running on port ${8080}`);
});
