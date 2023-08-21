function countEvenNumbers(numbers) {
    let evenCount = 0; 

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
        }
    }

    return evenCount;
}


console.log(countEvenNumbers([1, 2, 3, 4, 5, 6])); 
