const fs = require("fs").promises;

async function writeFileExample() {
  try {
    //file txt
    await fs.writeFile("write-file.txt", " every one", "utf8");

    //file json
    const data = { phoneNumber: 388661185, score: 9.5 };
    await fs.writeFile(
      "write-file.json",
      JSON.stringify(data, null, 2),
      "utf-8"
    );

    //txt empty
    await fs.writeFile("write-file-empty.txt", "test write file", "utf-8");

    console.log("Write file successfully");
  } catch (err) {
    console.log("Error when write file", err);
  }
}

writeFileExample();
