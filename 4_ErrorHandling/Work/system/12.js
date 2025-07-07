//Bài 12. Viết hàm checkAge(age) → Nếu age < 18, throw AgeRestrictionError.

function checkAge(age) {
  if (age < 18) {
    throw Error("AgeRestrictionError");
  } else {
    console.log("Age: ", age);
  }
}

checkAge(18);
checkAge(17);
