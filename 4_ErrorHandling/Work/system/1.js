//Bài 1. Đọc file abc.txt không tồn tại → Bắt lỗi ENOENT.

const fs = require("fs");

fs.readFile("abc.txt", (err) => {
  if (err) {
    console.log("Error when read file: ", err);
  } else console.log("Read file successfully !");
});
