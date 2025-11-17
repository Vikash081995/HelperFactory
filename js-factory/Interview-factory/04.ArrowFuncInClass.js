const Person = function (name) {
  this.name = name;
  this.sayName1 = function () {
    console.log(this.name);
  };
  //using Arrow function
  this.sayName2 = () => {
    console.log(this.name);
  };

};


const john = new Person('john')
const dave = new Person('Dave')

john.sayName1()//john
john.sayName2() //john

//regular function have its this value changed but arrow does not
john.sayName1.call(dave);//Dave
john.sayName2.call(dave) //john

john.sayName1.apply(dave) //Dave
john.sayName2.apply(dave) //john

john.sayName1.bind(dave)(); // Dave (because \\`this\\` is now the dave object)
john.sayName2.bind(dave)(); // John

const sayNameFromWindow1 = john.sayName1 
// sayNameFromWindow1() //undefined as this points to window object now

const sayNameFromWin2 = john.sayName2;
sayNameFromWin2() //john