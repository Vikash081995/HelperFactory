function FlatArray(arr){
    let res=[]
    for(let elem of arr){
        if(Array.isArray(elem)){
            res = res.concat(FlatArray(elem))
        }else{
            res.push(elem)
        }
    }
    return res
}   

console.log(FlatArray([1,2,3,4,5,[5,6,[9,0]],10]))