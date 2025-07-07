//Kiểm tra xem file data.json có tồn tại không
//Dùng fs.existsSync() hoặc fs.access()

const fs = require("fs");
const fsp = require("fs").promises;
const path = require("path");

const filePathJSON = path.join(__dirname, "./data.json");
const filePathJSON1 = path.join(__dirname, "./data1.json");

//callback
fs.access(filePathJSON, fs.constants.F_OK, function (err) {
  console.log("Access checking file");
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("File can be");
  }
});

fs.access(filePathJSON1, fs.constants.F_OK, function (err) {
  console.log("Access checking file");
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("File can be");
  }
});

//promises
fsp
  .access(filePathJSON, fsp.constants.F_OK)
  .then(() => {
    console.log("File can be");
  })
  .catch((err) => {
    console.log("File not can be");
  });

//async/await
async function accessFile() {
  try {
    await (fsp.filePathJSON1, fsp.constants.F_OK);
    console.log("File can be");
  } catch (err) {
    console.log("File can not be");
  }
}
accessFile();
