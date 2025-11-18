const cat = {
  name: "Blue steele",
  age: 7,
  breed: "Scottish Flod",
};

const handler = {
  get: function (obj, property) {
    return obj[property];
  },
  set: function (obj, property, value) {
    obj[property] = "NOPE";
  },
};

const catProxy = new Proxy(cat, handler);

console.log(catProxy.age);
console.log(catProxy.breed);
