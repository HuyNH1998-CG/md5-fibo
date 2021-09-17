function fibonacci(numbers) {
    if (numbers == 1 || numbers == 2) {
        return 1;
    }
    return fibonacci(numbers - 1) + fibonacci(numbers - 2);
}
var sum = 0;
for (var i = 1; i < 3; i++) {
    sum += fibonacci(i);
}
console.log("sum is " + sum);
