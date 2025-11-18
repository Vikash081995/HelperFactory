class Dog{
    constructor(name,breed){
        this.name = name;
        this.breed = breed
    }
    bark(){
        return `${this.name} says woff!`
    }
    sleep(){
        return `${this.name} says sleeping!`
    }
}

class GuideDog extends Dog{
    constructor(name,breed,owner){
        super(name,breed);
        this.owner = owner
    }
    alert(){
        return `${this.name} alerts you to danger.Good dog!`
    }
}

const chaco = new GuideDog('Choco','Lab','Maggie')
chaco.alert()