//return element last

const path = require("path");

const filename = path.basename("user/module/path");
const filename2 = path.basename("user/module/path1", "path1");
console.log(filename);
console.log(filename2);
