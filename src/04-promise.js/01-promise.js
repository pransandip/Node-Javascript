const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

const friedRice = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve("Fried Rice Done");
  } else {
    reject("Elements not present");
  }
});

console.log(friedRice);
