class Bird{

fly(){
    return `Flying.....`
}
}

class Panguin extends Bird{
    fly(){
        return `Penguing can't fly`
    }
}

let bird = new Bird()
let penguin  = new Panguin()

console.log(bird.fly())
console.log(penguin.fly())

