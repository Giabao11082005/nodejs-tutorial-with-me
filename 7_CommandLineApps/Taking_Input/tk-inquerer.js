const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "username",
      message: "Nhập tên của bạn:",
    },
  ])
  .then((answers) => {
    console.log("Xin chào:", answers.username);
  });
