//eacces: quyen bi tu choi: truy cap vao file, tep, cong mang ma khong duoc cap phep
const fs = require("fs");

fs.readFile("/etc/sudoers", (err, data) => {
  if (err) throw err;
  console.log(data);
});
