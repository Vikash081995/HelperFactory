//curry applications
const greet = (greeting) => (name) => `${greeting},${name}`;

const sayHello = greet("Hello");
console.log(sayHello("John"));
console.log(sayHello("Jane"));
// ====    

const compose = (f, g) => (x) => f(g(x));
const toUpperCase = (x) => x.toUpperCase();
const exclaim = (str) => str + "!!!";

const shout = compose(exclaim, toUpperCase);
console.log(shout("hello"));

//=============================
const fetchData = (baseUrl) => (endpoint) => (id) =>
  fetch(`${baseUrl}/${endpoint}/${id}`);

const fetchUsers = fetchData("<https://api.example.com>")("users");
fetchUsers(1).then(console.log); // Fetches user with ID 1
