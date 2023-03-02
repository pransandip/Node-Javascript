// Promise.resolve

const response = Promise.resolve({ name: "sandy", age: 28 });

// then method always return promise
response
  .then((data) => {
    console.log(data);
    data["role"] = "dev";
    // * returning promise [internally: Promise.resolve(data)] happening
    // * we can use .then() only in promise not in string
    return data;
    // return Promise.resolve(data);
  })
  .then((data) => {
    console.log(data);
    const newObj = { ...data, add: "kolkata" };
    return newObj;
  })
  .then((data) => {
    console.log(data);
  });
  