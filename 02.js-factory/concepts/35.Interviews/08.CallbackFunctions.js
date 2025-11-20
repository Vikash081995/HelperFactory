function fetchData(callback){
    setTimeout(()=>{
        const data = {name:'john',age:30}
        callback(data)
    },1000)
}

function handleData(data){
    console.log(`Name: ${data.name}, Age: ${data.age}`);
}

fetchData(handleData);
// After 1 second delay, it will log:
// Name: john, Age: 30