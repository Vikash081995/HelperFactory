function vowels(str){
  const matches =  str.match(/[aeiou]/gi).length
  return matches ?matches.length:0
}