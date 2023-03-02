async function getData() {
  const [postResponse, albumsResponse] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts`),
    fetch(`https://jsonplaceholder.typicode.com/albums`),
  ]);

  const posts = await postResponse.json();
  const albums = await albumsResponse.json();
  return { posts, albums };
}

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
