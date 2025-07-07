const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("This is my home Page");
});

app.get("/home", (req, res) => {
  res.status(200).send("This is my home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("This is my about page");
});

app.get("/contact", (req, res) => {
  res.status(200).send("This is my contact page");
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
