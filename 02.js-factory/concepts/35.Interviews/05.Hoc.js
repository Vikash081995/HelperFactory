//simple higher order-function
function multiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const twice = multiplier(2);
console.log(twice(5));

const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(multiplier(2));
console.log(doubled); //[2,4,6,8,10]
