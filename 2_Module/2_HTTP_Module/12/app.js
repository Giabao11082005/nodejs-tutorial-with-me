//Tạo API trả về danh sách sản phẩm (dạng JSON)

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const product = [
  { id: 1, name: "Sugar", price: 2500 },
  { id: 2, name: "Noodle", price: 1000 },
  { id: 4, name: "Milk", price: 7000 },
];

app.get("/product", (req, res) => {
  res.status(200).json(product);
});

app.use((req, res) => {
  res.status(404).send("Khong tim thay san pham");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
