const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring"); // Dùng để phân tích dữ liệu form (URL-encoded)

const PORT = process.env.PORT || 3000;
const formFilePath = path.join(__dirname, "form.txt"); // Đường dẫn đến file sẽ lưu dữ liệu
const htmlFormPath = path.join(__dirname, "index.html"); // Đường dẫn đến file HTML của form

const server = http.createServer(function (req, res) {
  // Ghi log URL và phương thức của yêu cầu
  console.log(`Request received: ${req.method} ${req.url}`);

  // --- Xử lý yêu cầu GET để phục vụ form HTML ---
  if (req.method === "GET" && (req.url === "/" || req.url === "/form")) {
    fs.readFile(htmlFormPath, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading form HTML file:", err);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error: Could not load form.");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  }
  // --- Xử lý yêu cầu POST để ghi dữ liệu form ---
  else if (req.method === "POST" && req.url === "/submit-form") {
    let body = "";
    // Lắng nghe sự kiện 'data' để thu thập các phần của dữ liệu gửi lên
    req.on("data", (chunk) => {
      body += chunk.toString(); // Chuyển đổi Buffer sang chuỗi và nối vào 'body'
    });

    // Lắng nghe sự kiện 'end' khi tất cả dữ liệu đã được nhận
    req.on("end", () => {
      let formData;
      try {
        // Phân tích dữ liệu form. Thường là application/x-www-form-urlencoded
        formData = querystring.parse(body);
      } catch (e) {
        console.error("Error parsing form data:", e);
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Bad Request: Invalid form data.");
        return;
      }

      const message = formData.message || "Không có tin nhắn"; // Lấy dữ liệu từ trường 'message'
      const dataToSave = `Thời gian: ${new Date().toLocaleString()}\nTin nhắn: ${message}\n---\n`;

      // Ghi dữ liệu vào file form.txt
      // 'a' là chế độ append (thêm vào cuối file nếu file tồn tại, tạo mới nếu không)
      fs.writeFile(
        formFilePath,
        dataToSave,
        { encoding: "utf8", flag: "a" },
        (err) => {
          if (err) {
            console.error("Error writing to file:", err);
            res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("Đã xảy ra lỗi khi ghi dữ liệu!");
          } else {
            console.log("Data written to form.txt successfully.");
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.end(
              "<h1>Dữ liệu đã được ghi thành công!</h1><p><a href='/'>Quay lại form</a></p>"
            );
          }
        }
      );
    });
  }
  // --- Xử lý các URL hoặc phương thức không khớp ---
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(PORT, function (err) {
  if (err) console.log("Error: ", err);
  else console.log(`Server running on port ${PORT}`);
});
