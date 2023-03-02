const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

// * this is promise object
const friedRice = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt2") &&
    bucket.includes("rice")
  ) {
    resolve("Fried Rice Done");
  } else {
    reject(new Error("Element not present"));
  }
});

// * thats why we are not calling here
friedRice
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
