const fs = require("fs");

try {
  const data = fs.writeFileSync("read-file-async.txt", "utf8");
  console.log("Content file: ", data);
} catch (err) {
  console.log("Error when red file with async");
}
