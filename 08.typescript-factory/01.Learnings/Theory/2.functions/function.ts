function square(num: number): number {
  return num * 2;
}
console.log(square(2)); // 4
//===============================

function greet(person: string) {
  return `Hi there!${person}`;
}
// greet(true); // Error: Argument of type 'true' is not assignable to parameter of type 'string'.
greet("John");
//==================================
//Arrow functions
const add = (a: number, b: number): number => a + b;
add(1, 2); // 3
//===========================================
//setting default values
function addNumbers(a: number, b: number = 9): number {
  return a + b;
}
addNumbers(1); // 10
//=================
//Anonymous functions
const colors = ["red", "green", "blue"];
colors.map((color) => {
  return color.toUpperCase();
});
//=======================
//returning void
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}
printTwice("hello");
//==========================
//returning never
function throwError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("Infinite loop");
  }
}

//=====================
function fail(message: string): never {
  throw new Error(`Invarinat failure:${message}`);
}

function workWithUnsafeParam(param: unknown) {
  if (typeof param !== "string") {
    fail(`param should be a string, not ${typeof param}`);
  }
  param.toUpperCase();
}
//=========================
//Function overloads
function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
  return day === undefined || year === undefined
    ? new Date(monthOrTimestamp)
    : new Date(year, monthOrTimestamp, day);
}
createDate(5555555);
createDate(7, 27, 1987);
// createDate(4,1)// Error: No overload expects 2 arguments.
