/**
 **  The Promise.all() static method takes an iterable of promises
 **  as input and returns a single Promise. This returned promise
 **  fulfills when all of the input's promises fulfill (including
 **  when an empty iterable is passed), with an array of the fulfillment values.
 **  It rejects when any of the input's promises rejects, with this first rejection reason.
 */

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo");
});

console.log(promise3);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("then block");
    console.log(values);
  })
  .catch((err) => {
    console.log("catch block");
    console.log(err);
  });
