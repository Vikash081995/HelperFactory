let ingredients =[]

async function fetchPantry(){
    const response = await fetch("https://api.example.com/pantry");
    ingredients = await response.json()
}

fetchPantry()

export {ingredients}