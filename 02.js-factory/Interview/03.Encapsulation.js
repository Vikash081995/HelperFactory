//Hiding details like varibale -> private variables

//Method1 = closure
function OuterFn() {
  let outer = "I am fn";
  function innerFunc() {
    console.log(outer);
  }
  return innerFunc;
}

let private = OuterFn();
console.log(private()); // I am fn

//Method2- Constructor
function Gadgets() {
  let secret = "top secret";
  this.setSecret = function (value) {
    secret = value;
  };
  this.getSecret = function () {
    return secret;
  };
}

let phone = new Gadgets();
phone.setSecret("new sec");
console.log(phone.getSecret()); //new sec

//Method3- Modules
let myModule = (function () {
  let privateVar = "I am private";

  function privateMethod() {
    console.log("I am private method");
  }
  return {
    publicMethod: function () {
      console.log("I am public method");
    },
    getPrivateVariable: function () {
      return privateVar;
    },
  };
})();

console.log(myModule.getPrivateVariable()); //I am private
// myModule.privateMethod() //throw error
