let arr =['2','3',5,6,7,8]

for (let elem in arr){
    console.log(elem)
}
// 0;
// 1;
// 2;
// 3;
// 4;
// 5;
for(let elem of arr){
    console.log(elem)
}
// 2;
// 3;
// 5;
// 6;
// 7;
// 8;

arr.forEach((elm,idx)=>{
    console.log("elem",elm,"index",idx)
})
// elem 2 index 0
// elem 3 index 1
// elem 5 index 2
// elem 6 index 3
// elem 7 index 4
// elem 8 index 5
// ==============================
//Adding and Removing Elements 
let arr1=['one','two','three','four','five']
console.log(arr1.push("Six"))
console.log(arr1)   
//6
//[ 'one', 'two', 'three', 'four', 'five', 'Six' ]
console.log(arr1.unshift('Zero'))
console.log(arr1)
// 7
// [
//   'Zero', 'one',
//   'two',  'three',
//   'four', 'five',
//   'Six'
// ]
console.log(arr1.pop())
console.log(arr1)
// Six
// [ 'Zero', 'one', 'two', 'three', 'four', 'five' ]

//splice
let numarr = [1,2,3,4,5]
console.log(numarr.splice(2,1,'num1','num2'))
console.log(numarr)

//Searching in arr 
let arr_search=['one','two','three','one','two','three','one','two','three']
console.log(arr_search.includes('one',3)) //true

//find
let arreg= [2200,11,400,500,600]
const rval = arreg.find((elem)=>{
    return elem>11
})
console.log(rval) //2200

//filter 
const filtered = arreg.filter(elem=>elem>11)
console.log(filtered) //[ 2200, 400, 500, 600 ]