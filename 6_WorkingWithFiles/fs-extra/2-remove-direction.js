// Đảm bảo bạn đã cài đặt fs-extra: npm install fs-extra
const fs = require("fs-extra");

// --- Callback Style (chỉ để minh họa, nhưng ít được dùng với fs-extra) ---
// fs.remove() KHÔNG ném lỗi nếu thư mục không tồn tại,
// nên không cần kiểm tra err.code === "ENOENT" ở đây.
fs.remove("./temp_callback", function (err) {
  if (err) {
    // Chỉ xử lý các lỗi thực sự khác (ví dụ: lỗi quyền truy cập)
    console.log("Error when removing ./temp_callback:", err);
  } else {
    console.log("Remove ./temp_callback successfully!");
  }
});

// --- Promises Style ---
// fs.remove() KHÔNG trả về Promise bị reject nếu thư mục không tồn tại.
// Nó chỉ resolve thành công.
fs.remove("./temp_promises")
  .then(() => console.log("Remove ./temp_promises successfully!"))
  .catch((err) => {
    // Lỗi ở đây sẽ là các lỗi khác ngoài "ENOENT" (ví dụ: quyền truy cập)
    console.log("Error when removing ./temp_promises:", err);
  });

// --- Async-Await Style ---
async function removeDirectoryAsync() {
  try {
    // fs.remove() KHÔNG ném lỗi nếu thư mục không tồn tại,
    // nên khối catch này chỉ bắt các lỗi thực sự khác (ví dụ: quyền truy cập).
    await fs.remove("./temp_async_await");
    console.log("Remove ./temp_async_await successfully!");
  } catch (err) {
    console.log("Error when removing ./temp_async_await:", err);
  }
}

removeDirectoryAsync();
