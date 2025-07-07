//Xóa file delete.txt nếu tồn tại
//Dùng fs.unlink()

const fsp = require("fs").promises;

const path = require("path");

const filePath = path.join(__dirname, "./delete.txt");

async function deleteFile() {
  try {
    await fsp.unlink(filePath);
    console.log("Delete file successfully");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File doesn't exists");
    } else {
      console.log("Error: ", err);
    }
  }
}

deleteFile();
