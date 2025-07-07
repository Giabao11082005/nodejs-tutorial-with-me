import figlet from "figlet";

figlet("Hello!", function (err, data) {
  if (err) return console.log("Lỗi:", err);
  console.log(data);
});
