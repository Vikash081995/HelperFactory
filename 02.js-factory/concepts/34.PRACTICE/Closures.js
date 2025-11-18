const addCounter = () => {
  let counter = 0;
  return () => {
    counter++;
    return counter;
  };
};

const c1 = addCounter();
console.log(c1()); //1
console.log(c1()); //2
console.log(c1()); //3
//======================

function greet(whattosay) {
  return function (name) {
    console.log(whattosay + "" + name);
  };
}
greet("Hi")("Tony");
//============
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      return count++;
    },
    decrement: function () {
      return count--;
    },
    getCount: function () {
      return count;
    },
  };
}
const counter = createCounter();
console.log(counter.increment()); //0
console.log(counter.increment()); //1
console.log(counter.increment()); //2

//==============================
//closures with loop
for (let i = 1; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}