const mutableObj = {
  name: "John",
  age: 30,
};

mutableObj.age = 31; //object mutation

console.log(mutableObj); //{ name: 'John', age: 31 }

//-----------------------------

const immutableObj = Object.freeze({
  name: "Jane",
  age: 25,
});

immutableObj.age = 26; //attempt to mutate will fail silently in non-strict mode

console.log(immutableObj); //{ name: 'Jane', age: 25 }

//-----------------------------
