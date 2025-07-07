var url = require("url");
var link =
  "http://localhost:8080/url-module?month=August&year=2005&name=giabao";
var q = url.parse(link, true);

console.log(q.protocol);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);
console.log(qdata.name);
