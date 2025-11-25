function* numberGen() {
  let num = 0;
  while (num <= 5) {
    yield num++;
  }
}
const gen = numberGen();
console.log(gen.next()); // {value:0, done:false}
console.log(gen.next()); // {value:1, done:false}
console.log(gen.next()); // {value:2, done:false}
