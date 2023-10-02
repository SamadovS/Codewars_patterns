// Pattern 1:
//  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// >>>
function evenOrOdd(number) {
    if (number % 2 == 0) console.log("Even");
    else console.log("Odd");
}
evenOrOdd(4);
evenOrOdd(7);

//  Pattern 2:
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20. Note: if there is nothing to sum, the sum is default to 0.
// >>>
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) sum += arr[i];
    }
    return sum;
}
console.log(positiveSum([1, -4, 7, 12]));

//  Pattern 3:
//

// >>>
