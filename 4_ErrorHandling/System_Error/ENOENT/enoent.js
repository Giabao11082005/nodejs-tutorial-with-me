//ENOENT: khong tim thay file
const fs = require("fs");

fs.readFile("hello.txt", (err, data) => {
  if (err) {
    console.log("Error when read file", err);
  } else {
    console.log("Read file successfully ", data);
  }
});
