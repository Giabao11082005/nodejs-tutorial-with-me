const fs = require("fs");

fs.readFile("hello.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("Error when read file");
  } else {
    console.log("Read file successfully !");
    console.log("Data: ", data);
  }
});
