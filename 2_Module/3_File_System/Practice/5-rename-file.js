//Đổi tên file old.txt thành new.txt
//Dùng fs.rename()

const fs = require("fs");
const fsp = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "./old.txt");

fs.rename(filePath, "new.txt", function (err) {
  if (err) {
    if (err.code === "ENOENT") {
      console.log("File doesn't exists");
    } else {
      console.log("Error: ", err);
    }
  } else {
    console.log("Rename successfully ");
  }
});
