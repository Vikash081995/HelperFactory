import { pantryPromise } from "./pantry";

pantryPromise.then(ingredients=>{
    console.log(ingredients)
})

// ✅ Works fine.

// ❌ But requires `.then()` everywhere — not very clean or readable.