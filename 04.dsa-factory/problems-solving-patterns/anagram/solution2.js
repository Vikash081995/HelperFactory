function Anagrams(strA,strB){

if(strA.length !== strB.length) return false;
const lookup={}
for(let elem of strA){
    lookup[elem] ?lookup[elem]++: (lookup[elem]=1)
}

for( let elem of strB){
    if(!lookup[elem]){
        return false
    }else{
        lookup[elem]--
    }
    return true
}
    
}

