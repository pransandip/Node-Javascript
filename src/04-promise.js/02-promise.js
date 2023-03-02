function ricePromise() {
  const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
  return new Promise((resolve, reject) => {
    if (
      bucket.includes("vegetables") &&
      bucket.includes("salt") &&
      bucket.includes("rice")
    ) {
      resolve("Fried Rice Done");
    } else {
      reject(new Error("Element not present"));
    }
  });
}

// * we have to cll the function
ricePromise()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
