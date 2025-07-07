//Thêm dòng "Học lập trình rất vui" vào cuối file hello.txt
//Sử dụng fs.appendFile()

const fs = require("fs");
const fsp = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "./hello.txt");

//callback
fs.appendFile(
  filePath,
  "Hoc lap trinh rat vui - callback",
  "utf-8",
  function (err) {
    if (err) {
      if (err.code === "ENOENT") {
        console.log("File doesn't exists");
      } else {
        console.log("Error: ", err);
      }
    } else {
      console.log("Append file successfully - callback");
    }
  }
);

//promises
fsp
  .readFile(filePath, "utf-8", "Hoc lap trinh rat vui - promises")
  .then(console.log("Append file successfully  - promises"))
  .catch((err) => {
    if (err.code === "ENOENT") {
      console.log("File doesn't exists");
    } else {
      console.log("Error: ", err);
    }
  });

//async/await
async function appendHelloFile() {
  try {
    await fsp.readFile(
      filePath,
      "utf-8",
      "Hoc lap trinh khong kho - async/await"
    );
    console.log("Append file successfully - async/await");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File doesn't exist");
    } else {
      console.log("Error: ", err);
    }
  }
}
appendHelloFile();
