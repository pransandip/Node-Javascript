const URL = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
  return await (await fetch(URL)).json();
}

(async () => {
  const data = await getData();
  console.log(data);
})();

/**---------- BREAK ----------**/

async function getData2() {
  const data = await (await fetch(URL)).json();
  console.log(data);
}
getData2();
