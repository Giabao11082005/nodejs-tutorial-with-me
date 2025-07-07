const path = require("path");

//get dirname
console.log("Direction name: ", __dirname);

//get filename
console.log("File name: ", __filename);

//join dirname
const fullPath = path.join(__dirname, "config", "config.json");
console.log("Full path : ", fullPath);
