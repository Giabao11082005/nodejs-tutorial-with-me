const { write } = require("fs");

const fs = require("fs").promises;

async function writeFileAppendExample() {
  try {
    //file txt
    await fs.appendFile("write-file-append.txt", "sau khi da them", "utf-8");

    //file txt empty
    await fs.appendFile("write-file-append-empty.txt", "demo", "utf-8");

    console.log("Successfully");
  } catch (err) {
    console.log("Error: ", err);
  }
}

writeFileAppendExample();
