function max(first = -Infinity, ...rest) {
  let maxValue = first;
  for (let n of rest) {
    if (n > maxValue) maxValue = n;
  }
  return maxValue;
}

console.log(max(1, 2, 3, 4, 6, 7, 1000, 4, 5, 6));
