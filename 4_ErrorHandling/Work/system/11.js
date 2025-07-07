//Bài 11. Tạo UserNotFoundError và ném ra khi user === null.

// function UserNotFoundError(user) {
//   if (user === null) {
//     throw new Error("User not found");
//   } else {
//     console.log("User: ", user);
//   }
// }

class UserNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = UserNotFoundError;
  }
}

function getUser(user) {
  if (user === null) {
    throw new UserNotFoundError("User not found");
  } else {
    console.log("User: ", user);
  }
}

try {
  const user = null;
  getUser(user);
} catch (err) {
  if (err instanceof UserNotFoundError) {
    console.log("Current Error: ", err.message);
  } else {
    console.log("Other Error: ", err);
  }
}
