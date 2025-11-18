let arr =[2,3,5,6,]

let result = arr.reduce((acc,elem,index)=>{
    return acc+=elem
},0)

console.log(result)

//flat 2d array 
let Array2d=[1,2,4,[5,6,7]]

let flatArr = Array2d.reduce((acc,elem)=>{
    return  acc.concat(elem) 
},[])
console.log(flatArr)
// [ 1, 2, 4, 5, 6, 7 ]