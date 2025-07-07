const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(__dirname, "./test.txt");

async function readFileTest() {
  try {
    await fs.readFile(filePath, "utf-8");
    console.log("Read file successfully");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log("File doesn't exits");
    } else {
      console.log("Error: ", err);
    }
  }
}

readFileTest();
