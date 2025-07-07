const fs = require("fs");

fs.readFile("readfile.txt", "utf8", function (err, data) {
  if (err) {
    console.log("Error when read file: ", err);
    return;
  }
  console.log("Content file: ", data);
});

// fs.readFile(
//   "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-gai-xinh-viet-nam-mac-vay-hoa.jpg",
//   "utf8",
//   function (err, data) {
//     if (err) {
//       throw err;
//     }
//     console.log("Size image: ", data.length);
//   }
// );
