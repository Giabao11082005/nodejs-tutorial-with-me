const fs = require("fs").promises;
const path = require("path");

async function deleteFile() {
  const fileToDelete = ["1.txt", "2.txt", "3.txt"];

  try {
    await Promise.all(
      fileToDelete.map((file) =>
        fs.unlink(file).catch((err) => {
          if (err.code !== "ENOENT") {
            console.error(`Error deleting ${file}`, file);
          }
        })
      )
    );
    console.lof("File deleted successfully");
  } catch (err) {
    console.error("Error during file deletion", err);
  }
}

deleteFile();
