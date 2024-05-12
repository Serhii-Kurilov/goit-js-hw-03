function filterArray(numbers, value) {
    const suitableNumbers = [];
    for (let n = 0; n < numbers.length; n++) {
        if (numbers[n] > value) {
            suitableNumbers.push(numbers[n]);
        }
    }
    return suitableNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]