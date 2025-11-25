console.log("Start of the script 2");

setTimeout(() => {
    console.log("Inside setTimeout callback");
}, 2000);

console.log("End of the script 2");

// Expected Output:
// Start of the script 2
// End of the script 2
// Inside setTimeout callback