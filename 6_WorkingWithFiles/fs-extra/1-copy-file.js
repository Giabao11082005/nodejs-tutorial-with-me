//copyFile()	Copy file note.txt vào thư mục backup/.

const fs = require("fs-extra");

//callback
fs.copyFile("./note.txt", "./backup/note.txt", function (err) {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("Successfully !");
  }
});

//promises
fs.copyFile("./note1.txt", "./backup/note1.txt")
  .then(() => console.log("Successfully !"))
  .catch((err) => console.log("Error: ", err));

//async - await
async function copyFileToDirection() {
  try {
    await fs.copyFile("./note2.txt", "./backup/note2.txt");
    console.log("Successfully !");
  } catch (err) {
    console.log("Error: ", err);
  }
}
copyFileToDirection();
