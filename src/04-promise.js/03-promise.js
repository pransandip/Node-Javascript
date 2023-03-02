// * promise with setTimeout
function myPromise() {
  return new Promise((resolve, reject) => {
    const value = null;
    setTimeout(() => {
      if (value) {
        resolve("rice done now");
      } else {
        reject("rice not done");
      }
    }, 2000);
  });
}

myPromise()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("run finally");
  });
