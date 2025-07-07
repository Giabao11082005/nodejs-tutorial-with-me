const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "./test.txt");

fs.readFile(filePath, "utf-8")
  .then(() => {
    console.log("Read file successfully");
  })
  .catch((err) => {
    if (err.code === "ENOENT") {
      console.log("File doesn't exists");
    } else {
      console.log("Error: ", err);
    }
  });
