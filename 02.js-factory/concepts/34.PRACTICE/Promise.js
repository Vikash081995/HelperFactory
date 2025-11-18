const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("data loaded");
  }, 1000);
});

fetchData.then((data) => console.log(data));

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
];

Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
  results.forEach((r) => console.log(r.status));
});
