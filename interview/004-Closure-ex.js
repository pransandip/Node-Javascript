function initCounter(id) {
  let count = 0;
  return function () {
    count++;
    document.getElementById(id).innerText = count;
  };
}
let count = 10;
let counter1 = initCounter("btnCount1");
let counter2 = initCounter("btnCount2");
