function* range(from, to){
    for(let i=from;i<=to;i++){
        yield i
    }
}
const countrange = range(10,20)
console.log(countrange.next())