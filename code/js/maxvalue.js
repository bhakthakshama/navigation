function findMaxValue(n) {
    if (n.length === 0) {
        return undefined;
    }

    let max = n[0];

    for (let i = 1; i < n.length; i++) {
        if (n[i] > max) {
            max = n[i];
        }
    }

    return max;
}



console.log(findMaxValue([5, 9, 2, 6, 3]));
console.log(findMaxValue([-10, -5, -2, -8])); 
console.log(findMaxValue([100, 87, 92, 105]));
