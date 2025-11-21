let originalObj={
    name:"Vikash",
    address:{
        city:"Bangalore",
        state:"Karnataka"
    }
}

let shallowCopyObj ={...originalObj}

shallowCopyObj.address.city="Mumbai"

// console.log(originalObj) //original object is affected due to shallow copy
// console.log(shallowCopyObj) //shallow copy object

//===============================
//deep copy using JSON methods
let deepCopyObj = JSON.parse(JSON.stringify(originalObj))
deepCopyObj.address.state="Tamil Nadu"

console.log(originalObj) //original object is not affected due to deep copy
console.log(deepCopyObj) //deep copy object