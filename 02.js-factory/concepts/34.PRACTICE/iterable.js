let numbers =[1,2,3]
let iterator = numbers[Symbol.iterator]()

console.log(iterator.next())
//{ value: 1, done: false }

//
let iterable = [99]
let iter =iterable[Symbol.iterator]()

for(let result = iter.next();!result.done;result=iter.next()){
    console.log(iter) //99
}