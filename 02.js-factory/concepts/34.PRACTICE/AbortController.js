const controller = new AbortController();

const timeoutId = setTimeout(() => controller.abort(), 5000);

fetch("url", { signal: controller.signal })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => err)
  .finally(() => clearTimeout(timeoutId));
