/* ----- synchronous programming vs asynchronous programming ---- */

// * synchronous programming

// console.log("start script");
// console.time();

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }
// console.timeEnd();
// console.log("end script");

// * asynchronous programming

console.log("start script");
function hello() {
  console.log("hello world");
}
const clearId = setTimeout(hello, 2000);

for (let i = 1; i < 200; i++) {
  console.log("inside for loop");
}
console.log("end script");

// clearTimeout
console.log({ clearId });
clearTimeout(clearId); // now timeout will never execute
