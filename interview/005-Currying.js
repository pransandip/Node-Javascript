function sum(a) {
  return function (b) {
    return function (c) {
      console.log(a, b, c);
    };
  };
}
sum(1)(2)(3);

/*-------- BREAK ---------*/
let sum1 = (a) => (b) => (c) => a + b + c;
console.log(sum1(1)(2)(3));

/*-------- BREAK ---------*/
let log = (time) => (type) => (msg) => `${time}: ${type}: ${msg}`;
console.log(log(new Date().toLocaleDateString())("build")("OK"));

const logNow = log(new Date().toLocaleDateString());
console.log(logNow("warning")("temperature high"));
