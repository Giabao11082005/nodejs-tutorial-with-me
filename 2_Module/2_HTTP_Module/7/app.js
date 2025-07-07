//Lấy và hiển thị method HTTP (GET, POST, ...)

const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Hiển thị method đang sử dụng
  console.log("HTTP Method:", req.method);

  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Received a GET request\n");
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      console.log("Received body:", body);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Received a POST request with data\n");
    });
  } else {
    res.statusCode = 405;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Method ${req.method} not allowed\n`);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
