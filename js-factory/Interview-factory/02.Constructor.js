//ES5 Function Constructor

function Person(name) {
  this.name = name;
}

//ES2015 constructor

class PersonDum {
  constructor(name) {
    this.name = name;
  }
}

//--------------------
function Student(name, studentId) {
  Person.call(this, name);
  this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

//----------------
class Students extends PersonDum {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}
