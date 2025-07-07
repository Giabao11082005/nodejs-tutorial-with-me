// Đọc danh sách tất cả file trong thư mục logs/
// Dùng fs.readdir()

const fs = require("fs").promises;
const path = require("path");

const dirPath = path.join(__dirname, "./logs");

async function readDirection() {
  try {
    const files = await fs.readdir(dirPath);
    console.log("Read dir successfully");
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    console.log("Read dir fail");
  }
}

readDirection();
