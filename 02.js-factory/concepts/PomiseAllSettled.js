const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://invalid-url.com", // this will reject
];

Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
  results.forEach((result, index) => {
    if ((result.status = "fulfilled")) {
      console.log("success");
      console.log(result)
    } else {
      console.log("failed");
    }
  });
});
