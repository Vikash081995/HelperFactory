//write a function that returns the number of vowels used in a string.
//vowels are 'a','e','i','o','u'
//example : vowels('hello') === 2

function vowels(str){
    let strArr = str.split('');
    let count =0;
    for(let char of strArr){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count++;
        }
    }
    return count
}

console.log(vowels('hello'))