//capitalize('a short sentence) ->'A Short Sentence'

function Capitalize(str) {
  let newArr = str.split(" ");
  console.log(newArr);
  let arr2 = [];
  for (let elem of newArr) {
    if (elem.length > 0) {
      arr2.push(elem[0].toUpperCase() + elem.slice(1));
    } else {
      arr2.push(elem.toUpperCase());
    }
  }
  return arr2.join(" ");
}

console.log(Capitalize("a short sentence"));
