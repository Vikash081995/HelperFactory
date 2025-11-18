//functional constructor
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const Vj = new User("vj", "vikash");
console.log(Vj);

//User {
//   firstName: 'vj',
//   lastName: 'vikash',
//   fullName: [Function (anonymous)]
// }

//Class Constructor
class UserDetail {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const vj = new UserDetail("vj", "vikash");
console.log(vj);

// UserDetail { fName: 'vj', lName: 'vikash' }
