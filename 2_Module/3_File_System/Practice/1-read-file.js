// Đọc file note.txt và in ra nội dung
//Dùng fs.readFile() hoặc fs.promises.readFile()

//callback
const fs = require("fs");
const path = require("path");
const fsp = require("fs").promises;

const filePath = path.join(__dirname, "./note.txt");

fs.readFile(filePath, "utf-8", function (err, data) {
  if (err) {
    if (err.code === "ENOENT") {
      console.error("File doesn't exists");
    } else {
      console.error("Error: ", err);
    }
  } else {
    console.log("Successfully");
    console.log(data);
  }
});

//promises
fsp
  .readFile(filePath, "utf-8")
  .then((data) => {
    console.log("Successfully - promises");
    console.log(data);
  })
  .catch((err) => {
    if (err.code === "ENOENT") {
      console.log("File doesn't not exists");
    } else {
      console.log("Error: ", err);
    }
  });

//async-await
async function readNoteFile() {
  try {
    const data = await fsp.readFile(filePath, "utf-8");
    console.log("Successfully - async/await");
    console.log(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File doesn't exists");
    } else {
      console.log("Error: ", err);
    }
  }
}
readNoteFile();
