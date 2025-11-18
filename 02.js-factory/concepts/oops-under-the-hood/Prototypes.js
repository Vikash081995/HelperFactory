//functional constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  //   this.fullName = function () {
  //     return `${this.firstName} ${this.lastName}`;
  //   };
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const Vj = new Person("vj", "vikash");
console.log(Vj);
// Person { firstName: 'vj', lastName: 'vikash' }

console.log(Vj.fullName());
//vj vikash
