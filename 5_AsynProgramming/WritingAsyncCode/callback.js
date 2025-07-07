const fs = require("fs");
const path = require("path");

const filePath = path.join("/5_AsynProgramming/event-emitter.js");

fs.readFile(filePath, "utf-8", function (err, data) {
  console.log("Start read file");
  if (err) {
    if (err.code === "ENOENT") {
      console.log("File doesn't exists");
    } else {
      console.log("Error: ", err);
    }
  } else {
    console.log("Read file successfully");
    console.log(data);
  }
  console.log("Dang doc file");
});
