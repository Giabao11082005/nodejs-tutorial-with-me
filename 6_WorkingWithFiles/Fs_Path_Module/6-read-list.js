/**
 * 🔹 Bài 6: Đọc danh sách file trong thư mục
Tạo một thư mục data, chứa vài file .txt. Viết chương trình in ra danh sách tên file .txt trong thư mục data.
 */

const fs = require("fs").promises;
const path = require("path");

const pathToDirData = path.join(__dirname, "./data");

async function printListFile() {
  try {
    const files = await fs.readdir(pathToDirData);

    const txtFiles = files.filter((file) => path.extname(file) === ".txt");

    console.log("Danh sách file .txt:");
    txtFiles.forEach((file) => console.log("- " + file));
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("Thư mục không tồn tại.");
    } else {
      console.error("Lỗi khi đọc thư mục:", err);
    }
  }
}

printListFile();
