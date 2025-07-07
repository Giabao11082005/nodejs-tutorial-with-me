//Phân tích query string từ URL (sử dụng url module)
const url = require("url");
const linkURL = "http://w3chools/user/id?qwwb?quq?qee#qwe3aaa/docs.txt";
let query = url.parse(linkURL, true);
console.log(query.host);
console.log(query.pathname);
console.log(query.hostname);
console.log(query.protocol);
console.log(query.href);
console.log(query.search);
