const fs = require("fs").promises;

async function writeFileWithHandle() {
  let handleFile;

  try {
    handleFile = fs.open("write-file-handle.txt", "w");

    await handleFile.write("First line write success");
    await handleFile.write("Second line write success");
    await handleFile.write("Thirst line write success");

    console.log("Content write successfully");
  } catch (err) {
    console.error("Error: ", err);
  } finally {
    if (handleFile) {
      await handleFile.close();
    }
  }
}

writeFileWithHandle();
