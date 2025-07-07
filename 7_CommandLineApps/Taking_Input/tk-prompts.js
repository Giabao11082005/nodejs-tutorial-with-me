const prompts = require("prompts");

(async () => {
  const response = await prompts({
    type: "text",
    name: "username",
    message: "Tên của bạn là gì?",
  });

  console.log("Bạn vừa nhập:", response.username);
})();
