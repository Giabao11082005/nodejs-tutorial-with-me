//Bài 13. Trong login(user, pass) → Nếu sai mật khẩu, ném AuthenticationError.
const passCurrent = 123;

function login(user, pass) {
  if (pass !== passCurrent) {
    throw Error("AuthenticationError");
  } else {
    console.log(`User: ${user} --- Pass: ${pass}`);
  }
}

login("1244", "1222");
