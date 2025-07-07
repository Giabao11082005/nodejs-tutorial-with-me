//EEXIST: file da ton tai

const fs = require("fs");

fs.mkdir("demoFile", (err) => {
  if (err) {
    console.log("Error: ", err);
  }
  console.log("Create direction successfully !");
});
