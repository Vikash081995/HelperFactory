// //normal function

// function test(){

// }

const func = () => {};

//example
const Sum = (a, b) => {
  return a + b;
};


//this in arrow function v
const test = () => {
  console.log(this);
};
test();
