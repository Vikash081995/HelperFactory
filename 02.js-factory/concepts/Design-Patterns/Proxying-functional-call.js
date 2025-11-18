function multiply(a, b) {
  return a * b;
}

const handler = {
  apply: function (targetFunc, thisArg, argList) {
    console.log("You Ran the function");
    console.log("args are", argList);
    targetFunc(...argList);
  },
};

const multiplyProxy = new Proxy(multiply, handler);
console.log(multiplyProxy(1, 3));
