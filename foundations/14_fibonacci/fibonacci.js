const fibonacci = function(n) {
    +n
    if (n < 0) return "OOPS"
    if (n == 0) return 0
    if (n == 1) return 1
    
    const sequence = [0, 1]
    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i-1] + sequence[i-2])
    }
    return sequence[n]
};
console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
