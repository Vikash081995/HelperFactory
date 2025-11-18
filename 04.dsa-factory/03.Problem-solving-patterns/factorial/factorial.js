/**
 * Calculate the factorial of a non-negative integer.
 * Returns a BigInt to support large results.
 *
 * @param {number} n - non-negative integer
 * @returns {bigint}
 * @throws {TypeError} if n is not a non-negative integer
 */
function factorial(n) {
    if (!Number.isInteger(n) || n < 0) {
        throw new TypeError('n must be a non-negative integer');
    }
    let result = 1n;
    for (let i = 2n; i <= BigInt(n); i++) {
        result *= i;
    }
    return result;
}

module.exports = factorial;

// Example usage:
// const factorial = require('./factorial');
// console.log(String(factorial(20))); // "2432902008176640000"