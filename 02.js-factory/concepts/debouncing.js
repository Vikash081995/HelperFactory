function queryAPI(searchTerm) {
  console.log("Searching ", searchTerm);
}

const searchInput = document.getElementById("#search");
// let debounceTimeout;
// searchInput.addEventListener('input',()=>{
//     clearTimeout(debounceTimeout)
//     debounceTimeout =setTimeout(()=>{
//         queryAPi()
//     },2000)
// })

//fancy debouncing

function debounce(callBack, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callBack(...args);
    }, delay);
  };
}

const debouncedApi = debounce(queryAPI, 3000);

searchInput.addEventListener("input", (event) => {
  debouncedApi(event.target.value);
});
