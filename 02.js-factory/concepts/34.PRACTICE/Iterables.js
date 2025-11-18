let char = [..."abcd"];

let arr = [1, 2, 3, 4, 5];

let itr = arr[Symbol.iterator]();
console.log(itr);
console.log(itr.next()); //{ value: 1, done: false }
//=====================
let obj = {
  start: 10,
  end: 15,
  [Symbol.iterator]() {
    return {
      next() {
        if (obj.start <= obj.end) {
          return { value: obj.start++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let i of obj) {
  console.log(i);
}
