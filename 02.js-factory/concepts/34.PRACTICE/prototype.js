function Dog(name,breed){
    this.name=name;
    this.breed = breed;
    this.bark=function(){
        return `${this.name} is sleeping!`
    }
}

Dog.prototype.bark= function(){
    return `${this.name} says woof!`
}

Dog.prototype.sleep = function(){
    return`${this.name} is sleeping`
}

const pepper = new Dog("pepper",'scholder')
console.log(pepper)