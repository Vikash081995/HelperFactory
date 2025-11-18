async function getData(){
    const res1 = await fetch(url1)
    console.log(res1)

    const res2= await fetch(url2)
    console.log(res2)
}