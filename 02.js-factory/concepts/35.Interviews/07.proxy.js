const myObj = {
  name: "john",
  age: 42,
};

const handler = {
  get: function (target, prop) {
    console.log(`Someone accessed the property:${prop}`);
    return target[prop];
  },
};
const proxyObj = new Proxy(myObj, handler);
console.log(proxyObj.name);
console.log(proxyObj.age);
//Someone accessed the property:name
// john
// Someone accessed the property:age
//42
