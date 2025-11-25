function f(a){
    return function(b){
        return `a: ${a}, b: ${b}`;
    }
}
console.log(f(1)(2)); // a: 1, b: 2

//--------------------------------
function sum(a){
    return function(b,c){
        return a+b+c
    }
}

const x = sum(10);
console.log(x(20,30)) //60