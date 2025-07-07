const fs = require("fs").promises;

async function readFileExample() {
  try {
    const data = await fs.readFile("read_file_async.txt", "utf8");
    console.log("Content file: ", data);
  } catch (err) {
    console.log("Error when read file with promises");
  }
}

readFileExample();
