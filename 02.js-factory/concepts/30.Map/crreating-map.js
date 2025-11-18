let map = new Map()
let n = new Map(
    ["one",1]
    ["two",2]
)

//copy an object's entries
let o = {
    x:1,
    y:2
}

let p = new Map(Object.entries(o))
console.log(n) //Map(0) {}
console.log(p) //Map(2) { 'x' => 1, 'y' => 2 }

//=======method chaining ===========
let m = new Map().set("one",1).set("two",2)
console.log(m) //Map(2) { 'one' => 1, 'two' => 2 }
//=================================
let newMap =new Map()
newMap.set({},1)
newMap.set({},2)
console.log(newMap) //Map(2) { {} => 1, {} => 2 }

//iterating over map 
for(let [key,value] of m){
    console.log(key,value)
}
//one 1
// two 2