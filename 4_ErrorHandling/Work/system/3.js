const fs = require("fs");

fs.mkdir("log", (err) => {
  if (err) {
    console.log("Error fail", err);
  } else {
    console.log("Create direction successfully !");
  }
});
