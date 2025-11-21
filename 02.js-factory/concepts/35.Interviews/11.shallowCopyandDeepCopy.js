const originalArray = [1, 2, [2, 3, 5]]
const shallowCopy = [...originalArray];
console.log(shallowCopy)

//Shallow copy of an object 
const originalObj = { a: 1, b: 2, c: { d: 3 } }
const shallowCopyObj = { ...originalObj };
console.log(originalObj)
console.log(shallowCopyObj)