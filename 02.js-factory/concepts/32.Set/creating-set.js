let s = new Set();
let t = new Set([1, s]);

s.add(1);
s.add(true);
s.add([1, 2, 4]);
s.delete(1);
console.log(s); //{ true, [ 1, 2, 4 ] }
console.log(t); //{ 1, Set(2) { true, [ 1, 2, 4 ] } }

//checking membership=====================
let primes = new Set([2, 3, 5, 7]);
primes.has(2); //true
primes.has(7); //true
