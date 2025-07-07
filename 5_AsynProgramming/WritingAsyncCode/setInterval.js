function countAlphabet() {
  for (let i = 20; i >= 0; i--) {
    console.log(i);
    if (i === 0) break;
  }
}

setInterval(countAlphabet, 2000);
