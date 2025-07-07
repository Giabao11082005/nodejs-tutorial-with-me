/**
 * 🔹 Bài 1: Đường dẫn tuyệt đối và tương đối (path)
Tạo một chương trình:
In ra đường dẫn tuyệt đối của tệp hiện tại.
In ra tên file, thư mục chứa file, và phần mở rộng file.
👉 Gợi ý: __filename, __dirname, path.basename, path.extname, path.dirname
 */

const path = require("path");

console.log("Current file: ", __filename);
console.log("Direction file: ", __dirname);
console.log("Basename: ", path.basename(__filename));
console.log("Extname: ", path.extname(__filename));
console.log("Dirname: ", path.dirname(__filename));
