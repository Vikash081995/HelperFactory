function Range(from, to) {
  this.from = from;
  this.to = to;
}

Range.prototype = {
  includes: function (x) {
    return this.from <= x && x <= this.to;
  },
  [Symbol.iterator]: function* () {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },
  toString: function () {
    return this.from.toString() + this.to.toString();
  },
};

let r = new Range(1, 3);
console.log(r.includes(2)); //true
console.log(r.toString()); //13
console.log([...r]); //[1,2,3]
