/**
 * 🔹 Bài 5: Đọc nội dung file đã tạo
Đọc nội dung của file greeting.txt vừa tạo ở Bài 4 và in ra console.
 */

const fs = require("fs").promises;

async function readFile() {
  try {
    const data = await fs.readFile("greeting.txt", "utf-8");
    console.log("Nội dung file:", data);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File không tồn tại");
    } else {
      console.log("Lỗi khi đọc file:", err);
    }
  }
}

readFile();
