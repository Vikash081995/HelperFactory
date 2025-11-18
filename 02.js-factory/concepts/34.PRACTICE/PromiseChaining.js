const base_url = "https://pokeapi.co/api/v2/";

fetch(`${base_url}/1`)
    .then((res1)=>{
        console.log(res1)
        return fetch(`${base_url}/2`);
    })
    .then((res2)=>{
        console.log(res2)
        return fetch(`${base_url}/3`);
    })
    .catch((err)=>{
        console.log(err)
    })


    
