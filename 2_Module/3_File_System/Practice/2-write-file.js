//Ghi nội dung "Hello, Node.js" vào file hello.txt
//Sử dụng fs.writeFile()

const fs = require("fs");
const path = require("path");
const fsp = require("fs").promises;

const filePath = path.join(__dirname, "./hello.txt");

//callback
fs.writeFile(filePath, "Hello, Node.js - callback", function (err) {
  if (err) {
    if (err.code === "ENOENT") {
      console.log("File doesn't exists");
    } else {
      console.log("Error: ", err);
    }
  } else {
    console.log("Write file callback successfully");
  }
});

//promises
fsp
  .writeFile(filePath, " Hello, Node.js - promises")
  .then(console.log("Write file promises successfully"))
  .catch((err) => {
    if (err.code === "ENOENT") {
      console.log("File doesn't exists");
    } else {
      console.log("Error: ", err);
    }
  });

//async-await
async function writeHelloFile() {
  try {
    await fsp.writeFile(filePath, "Hello, Node.js - async/await");
    console.log("Write file async/await successfully");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File doesn't exists");
    } else {
      console.log("Error: ", err);
    }
  }
}

writeHelloFile();
