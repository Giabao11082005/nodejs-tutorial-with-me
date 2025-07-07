//Bài 4. Đọc thư mục như file → Gây lỗi EISDIR.

const fs = require("fs");
const path = require("path");

const pathName = path.join(__dirname, "log");

fs.readFile(pathName, "utf-8", (err, data) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("Success !");
  }
});

// fs.readFile("1.js", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error: ", err);
//   } else {
//     console.log("Successfully ", data);
//   }
// });

// fs.readdir("log", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error: ", err);
//   } else {
//     console.log("Successfully ", data);
//   }
// });
