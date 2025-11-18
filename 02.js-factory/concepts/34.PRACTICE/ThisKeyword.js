const Person = {
  name: "conan",
  city: "los angele",
  sing: function () {
    return `${this.name} sings `;
  },
};
console.log(Person.sing()); //conan sings
const pSign = Person.sing;
console.log(pSign());
//lalalal

///===example 2
class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }
  dance(style = "tango") {
    return `Meow i ${this.firstName}` + `and I like to ${style}`;
  }
}

const fluffy = new Cat("fluffy");
console.log(fluffy.dance()); //Meow i fluffyand I like to tango
console.log(fluffy.dance("Sassy")); //Meow i fluffyand I like to Sassy
const fDance = fluffy.dance;
// console.log(fDance()) //error

//===========
// function whatIsThis(){
//     console.log("The Value of this is ",this)
// }
// whatIsThis()
//===================
//use call to avoid error
console.log(fDance.call(fluffy, "tango"));

const lisa = {
  name: "lisa",
  city: "new dallas",
};
console.log(Person.sing.call(lisa)); //lisa sings

//Apply
const ringo = {
  firstName: "Ringo",
  greet: function (greeting) {
    console.log(`${this.firstName} says ${greeting}`);
  },
};
const george = {
  firstName: "George",
  lastName: "Harrison",
};
console.log(ringo.greet.call(george, "hi")); //George says hi
console.log(ringo.greet.apply(george, ["hi"])); //George says hi
console.log(ringo.greet.apply(george, ["hello", "gm"])); //George says hello
//===========================================
const nums = [1.2, 4, 5, 6, 7, 8, 10];
console.log(Math.max.apply(null, [...nums])); //10

//==================Bind====================
const callLisaAgain = Person.sing.bind(lisa);
console.log(callLisaAgain()); //lisa sings
//Binding arguments

function applySaleTax(taxRate, price) {
  return price + price * taxRate;
}
const applytax = applySaleTax.bind(null, 0.34);
console.log(applytax(100)); //134
const applyIncometax = applySaleTax.bind(null, 0.5);
console.log(applyIncometax(123444)); //185166
//=================
function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2);
console.log(double(10)); //20
//===============
//this in arrow functions 
class Cat {
  constructor(fName) {
    this.fName = fName;
  }

  superGreet() {
    console.log(`#1 I am ${this.fName}`);

    setTimeout(function () {
      console.log(`#2 I am ${this.fName}`);
    }, 500);

    setTimeout(() => {
      console.log(`#3 I am ${this.fName}`);
    });
  }
}

let kitty = new Cat("kitty");
kitty.superGreet();
// #1 I am kitty
// #3 I am kitty
// #2 I am undefined
