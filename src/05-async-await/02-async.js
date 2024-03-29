console.log("start"); // async test

const URL = "https://jsonplaceholder.typicode.com/posts";

const getData = async () => {
  const response = await fetch(URL); // await will wait to resolve
  const data = await response.json();
  console.log(data);
};

getData();

/**---------- BREAK ----------**/

const getData2 = async () => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Some thing went wrong");
  }
  const data = await response.json();
  return data;
};

getData2()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

/**---------- BREAK ----------**/

const getData3 = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

/**
 ** because getData3 is a async func u hav
 ** to use async func to access data
 */

const func = async () => {
  console.log(await getData3());
};

func();

console.log("End");
