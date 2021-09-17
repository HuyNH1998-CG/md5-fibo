function fibonacci(numbers: number): number {
    if (numbers == 1 || numbers == 2) {
        return 1;
    }
    return fibonacci(numbers - 1) + fibonacci(numbers - 2);
}

let sum: number = 0;
for (let i = 1; i < 3; i++) {
    sum+= fibonacci(i);
}
console.log(`sum is ${sum}`)