//tra ve tat ca bo phan duong dan
const path = require("path");

const infoPath = path.parse("user/admin/support/text.docx");

console.log(infoPath.root);
console.log(infoPath.name);
console.log(infoPath.ext);
console.log(infoPath.base);
