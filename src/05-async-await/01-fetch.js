const URL = "https://jsonplaceholder.typicode.com/posts";
const posts = fetch(URL);
console.log(posts);

posts
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("something went wrong");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
