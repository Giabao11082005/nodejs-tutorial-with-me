/**
 * 🔹 Bài 4: Tạo file mới và ghi nội dung
Tạo một file mới tên là greeting.txt và ghi nội dung Hello, Node.js! vào trong file.
👉 Gợi ý: fs.writeFileSync, fs.writeFile
 */

const fs = require("fs").promises;

async function createFile() {
  await fs.writeFile("greeting.txt", "Hello, Node.js !", function (err) {
    if (err) {
      console.log("Error when create file ", err);
    } else {
      console.log("Create file successfully ");
    }
  });
}

createFile();
