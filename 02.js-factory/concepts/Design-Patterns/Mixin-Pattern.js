const fly = {
  fly() {
    return `${this.name} flies!!!`;
  },
  land() {
    return `${this.name} and ${this.species}`;
  },
};

class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  greet() {
    return `${this.name} says hi`;
  }
}

const bernie = new Animal("Benrie", "pelican");
Object.assign(bernie, fly);
console.log(bernie.fly()); //Benrie flies!!!
console.log(bernie.land()); //Benrie and pelican
