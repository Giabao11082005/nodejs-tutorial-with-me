// 17, Tạo API POST nhận dữ liệu JSON từ client và lưu lại: user ---(post - file json)--> server save

const http = require("http");
const fs = require("fs"); // Đã sửa: require module 'fs' đúng
const path = require("path"); // Giúp xử lý đường dẫn file

const PORT = process.env.PORT || 3000;
const DATA_FILE_PATH = path.join(__dirname, "data.json"); // Đường dẫn đến file JSON để lưu trữ dữ liệu

// Hàm để đọc dữ liệu từ file JSON
function readDataFromFile(callback) {
  fs.readFile(DATA_FILE_PATH, "utf8", (err, data) => {
    if (err) {
      // Nếu file không tồn tại, trả về mảng rỗng
      if (err.code === "ENOENT") {
        return callback(null, []);
      }
      return callback(err); // Trả về lỗi khác
    }
    try {
      const jsonData = JSON.parse(data);
      callback(null, jsonData); // Trả về dữ liệu đã parse
    } catch (e) {
      callback(e); // Trả về lỗi nếu JSON không hợp lệ
    }
  });
}

// Hàm để ghi dữ liệu vào file JSON
function writeDataToFile(data, callback) {
  const jsonString = JSON.stringify(data, null, 2); // Chuyển đổi đối tượng JS thành chuỗi JSON, định dạng đẹp (indent 2 spaces)
  fs.writeFile(DATA_FILE_PATH, jsonString, "utf8", callback); // Ghi dữ liệu vào file
}

const server = http.createServer(function (req, res) {
  console.log(`Request received: ${req.method} ${req.url}`);

  // --- Xử lý API POST để nhận và lưu dữ liệu JSON ---
  if (req.method === "POST" && req.url === "/json") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // Thu thập các phần dữ liệu (chuyển Buffer sang chuỗi)
    });

    req.on("end", () => {
      let newData;
      try {
        newData = JSON.parse(body); // Thử phân tích cú pháp chuỗi body thành đối tượng JSON
        // Kiểm tra xem newData có phải là một đối tượng hợp lệ không
        if (
          typeof newData !== "object" ||
          newData === null ||
          Array.isArray(newData)
        ) {
          throw new Error("Invalid JSON data format. Expected an object.");
        }
      } catch (e) {
        // Xử lý nếu dữ liệu gửi lên không phải JSON hợp lệ
        console.error("Error parsing incoming JSON:", e.message);
        res.writeHead(400, {
          "Content-Type": "application/json; charset=utf-8",
        });
        res.end(
          JSON.stringify({ message: `Dữ liệu JSON không hợp lệ: ${e.message}` })
        );
        return; // Dừng xử lý
      }

      // Đọc dữ liệu hiện có từ file
      readDataFromFile((err, existingData) => {
        if (err) {
          console.error("Error reading data file:", err);
          res.writeHead(500, {
            "Content-Type": "application/json; charset=utf-8",
          });
          res.end(JSON.stringify({ message: "Lỗi máy chủ khi đọc dữ liệu." }));
          return;
        }

        // Tạo ID mới đơn giản (trong môi trường thực tế cần phức tạp hơn)
        // Lấy ID lớn nhất hiện có hoặc bắt đầu từ 1 nếu mảng rỗng
        const newId =
          existingData.length > 0
            ? Math.max(...existingData.map((item) => item.id || 0)) + 1
            : 1;
        newData.id = newId; // Gán ID mới cho dữ liệu nhận được

        // Thêm dữ liệu mới vào mảng
        existingData.push(newData);

        // Ghi toàn bộ mảng đã cập nhật trở lại file
        writeDataToFile(existingData, (err) => {
          if (err) {
            console.error("Error writing data to file:", err);
            res.writeHead(500, {
              "Content-Type": "application/json; charset=utf-8",
            });
            res.end(
              JSON.stringify({ message: "Lỗi máy chủ khi lưu dữ liệu." })
            );
          } else {
            console.log("Data saved successfully:", newData);
            res.writeHead(201, {
              "Content-Type": "application/json; charset=utf-8",
            }); // 201 Created
            res.end(
              JSON.stringify({
                message: "Dữ liệu đã được lưu thành công!",
                data: newData,
              })
            );
          }
        });
      });
    });
  }
  // --- Xử lý API GET để trả về dữ liệu JSON hiện có (tùy chọn) ---
  else if (req.method === "GET" && req.url === "/json") {
    readDataFromFile((err, data) => {
      if (err) {
        console.error("Error reading data file for GET:", err);
        res.writeHead(500, {
          "Content-Type": "application/json; charset=utf-8",
        });
        res.end(JSON.stringify({ message: "Lỗi máy chủ khi lấy dữ liệu." }));
        return;
      }
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify(data, null, 2)); // Trả về toàn bộ dữ liệu hiện có
    });
  }
  // --- Xử lý các URL hoặc phương thức không khớp ---
  else {
    res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
    res.end(
      JSON.stringify({
        message:
          "404 Not Found - Endpoint không tồn tại hoặc phương thức không đúng.",
      })
    );
  }
});

server.listen(PORT, function (err) {
  if (err) console.log("Error: ", err);
  else console.log(`Server running on port ${PORT}`);
});
