(function myFunc(params) {
  console.log({ params });
})(1);

// * understanding callback
function myFunc(callback) {
  console.log(`func is doing some task: 1`);
  callback();
}

function myFunc2() {
  console.log(`func is doing some task: 2`);
}

// myFunc(myFunc2);
myFunc(() => {
  console.log(`func is doing some task: 2`);
});
