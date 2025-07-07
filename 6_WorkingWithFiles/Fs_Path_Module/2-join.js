/**
 *🔹 Bài 2: Nối các đường dẫn
Viết một chương trình nối đường dẫn "files", "data", "info.txt" thành một đường dẫn hợp lệ theo hệ điều hành.
👉 Gợi ý: path.join(...), path.resolve(...)
 */

const path = require("path");
const fullPathWithJoin = path.join("files", "data", "info.txt");
const fullPathWithResolve = path.join("files", "data", "info.txt");
console.log(fullPathWithJoin);
console.log(fullPathWithResolve);
