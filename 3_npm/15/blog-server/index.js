const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware để xử lý JSON trong body của request
app.use(express.json());

// --- Cấu hình kết nối MongoDB ---
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    // Thoát ứng dụng nếu không kết nối được DB
    process.exit(1);
  }
};

// Gọi hàm kết nối DB
connectDB();

// --- Định nghĩa một route đơn giản để kiểm tra server ---
app.get("/", (req, res) => {
  res.send("Welcome to the Blog Server API!");
});

// --- Khởi động Server ---
const PORT = process.env.PORT || 5000; // Sử dụng PORT từ .env hoặc 5000 nếu không có
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
