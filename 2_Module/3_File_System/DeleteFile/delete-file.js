const fs = require("fs").promises;

async function deleteOneFile() {
  //duong dan file
  const filePath = "delete-file.txt";

  try {
    //kiem tra file ton tai hay khong
    await fs.access(filePath);

    //tien hanh xoa file
    await fs.unlink(filePath);

    console.log("Delete file success");
  } catch (err) {
    if (err === "ENOENT") {
      console.log("File doesn't exist");
    } else {
      console.log("Doesn't delete file");
    }
  }
}

deleteOneFile();
