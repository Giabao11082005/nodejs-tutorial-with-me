console.log("Start: ");

setTimeout(() => {
  console.log("setTimeOut");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

process.nextTick(() => {
  console.log("process.nextTick");
});

console.log("End");
