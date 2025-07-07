//Bài 2. Ghi file vào thư mục hệ thống (/root/abc.txt) → Xử lý lỗi EACCES.

const fs = require("fs");

fs.writeFile("/root/abc.txt", "utf-8", (err) => {
  if (err) {
    console.log("Write file fail!", err);
  } else {
    console.log("Write file successfully !");
  }
});
