//convert f(a,b,c) into f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length>= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); //6
console.log(curriedSum(1, 2)(3)); //6
console.log(curriedSum(1)(2, 3)); //6
console.log(curriedSum(1, 2, 3)); //6
