const map = new Map()
map.set('abc',1)
map.set('bcd',2)
map.set({},3)

for(let [key,value] of map){
    console.log(key , value)
}
// abc 1
// bcd 2
// {} 3