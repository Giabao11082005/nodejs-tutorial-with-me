//Tạo thư mục mới tên là logs/
//Dùng fs.mkdir()

const fs = require("fs").promises;

async function createDirection() {
  try {
    await fs.mkdir("logs");
    console.log("Create direction successfully");
  } catch (err) {
    console.log("Khong the tao thu muc");
  }
}

createDirection();
