// Pattern 1: Even or Old
//  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// >>>
function evenOrOdd(number) {
    if (number % 2 == 0) console.log("Even");
    else console.log("Odd");
}
evenOrOdd(4);
evenOrOdd(7);

//  Pattern 2: Sum of Positive
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

//  Pattern 3: Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes:   The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
// >>>
makeNegative = (x) => {
    if (x > 0) {
        return x * -1;
    } else return x;
};
console.log(makeNegative(1));
console.log(makeNegative(5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));

//  Pattern 4: Reversed Strings
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// >>>
// method-1
function solution(str) {
    return str.split("").reverse("").join("");
}
console.log(solution("world"));
console.log(solution("word"));

// method-2
const solution2 = (str) => {
    return str.split("").reverse().join("");
};
console.log(solution2("apple"));
console.log(solution2("water"));

//  Pattern 5: Convert boolean values to strings 'Yes' or 'No'.
// >>>
// method-1: if-else
function boolToWord(bool) {
    if (bool == true) return "Yes";
    else return "No";
}
console.log(boolToWord(true));
console.log(boolToWord(false));

// method-2: ternary method
function boolToWord1(bool) {
    return bool ? "Yes" : "No";
}
console.log(boolToWord(false));
console.log(boolToWord(true));

//  Pattern 6: Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// >>>
function numberToString(num) {
    new_num = num.toString();
    console.log(new_num);
}
numberToString(123);
console.log(typeof new_num);
numberToString(999);
numberToString(-100);

// Pattern 7: Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.
// Examples:
//     1: -1
//     14: -14
//     -34: 34
// >>>
function opposite(a) {
    b = a * -1;
    console.log(b);
}
opposite(1);
opposite(14);
opposite(-34);

// Pattern 8: Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// >>>
function removeChar(str) {
    let new_str = str.split("");
    new_str.shift();
    new_str.pop();
    return new_str.join("");
}
console.log(removeChar("apple"));

// Pattern 9: String repeat
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// 6, "I"     -> "IIIIII"       ||      5, "Hello" -> "HelloHelloHelloHelloHello"
// >>>
// method-1:
function repeatStr(n, s) {
    return s.repeat(n);
}
console.log(repeatStr(6, "I"));

// method-2
function repeatStr(n, s) {
    repeat = "";
    for (let i = 0; i < n; i++) {
        repeat += s;
    }
    return repeat;
}
console.log(repeatStr(5, "Hello"));

// Pattern 10: Square(n) Sum
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because ==> 1(2) + 2(2) + 2(2) = 9.
// >>>
// method-1:
function squareSum(numbers) {
    return numbers.map((ele) => ele * ele).reduce((a, b) => a + b, 0);
}
console.log(squareSum([1, 2, 2]));

// method-2:
function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 2;
    }
    console.log(sum);
}
squareSum([1, 2, 2]);
