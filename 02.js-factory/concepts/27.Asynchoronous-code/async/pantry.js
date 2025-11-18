export async function getPantry(){
    const response = await fetch("https://api.example.com/pantry");
    return response.json()
}