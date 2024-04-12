# JavaScript Basics Exercises

## Instructions

- Fork and clone this repository.

Follow the instructions in each exercise to practice your JavaScript skills. Check the solutions provided if you need help.
You can also run the SpecRunner.html (right click on it and open with live server) file to check the tests.

### Exercise 1

Create a variable called `myName` and assign it a string value. Log the variable to the console.

<details>
<summary>Solution</summary>

```javascript
let myName = "John Doe";
console.log(myName);
```

</details>

### Exercise 2

Create a variable called `myAge` and assign it a number value. Log the variable to the console.

<details>
<summary>Solution</summary>

```javascript
let myAge = 30;
console.log(myAge);
```

</details>

### Exercise 3

Create a variable called `myHobbies` and assign it an array of string values. Log the variable to the console.

<details>
<summary>Solution</summary>

```javascript
let myHobbies = ["reading", "swimming", "coding"];
console.log(myHobbies);
```

</details>

### Exercise 4

Create a variable called `myDog` and assign it an object with properties of name, age, and breed. Log the variable to the console.

<details>
<summary>Solution</summary>

```javascript
let myDog = {
  name: "Buddy",
  age: 3,
  breed: "Golden Retriever",
};
console.log(myDog);
```

</details>

### Exercise 5

With the variables created above, create a new object called `myInfo`. This object should have properties (keys) of name, age, hobbies, and dog. Log the variable to the console.

<details>
<summary>Solution</summary>

```javascript
let myInfo = {
  name: myName,
  age: myAge,
  hobbies: myHobbies,
  dog: myDog,
};
console.log(myInfo);
```

</details>

### Exercise 6

Create a function called `sayHello` that takes in a name and logs the string "Hello, name". Call the function with the argument of your name.

<details>
<summary>Solution</summary>

```javascript
function sayHello(name) {
  console.log(`Hello, ${name}`);
}
sayHello("John Doe");
```

</details>

### Exercise 7

Given the array of names, create a loop to use the `sayHello` function to log "Hello, name" for each name in the array. Use a `for` loop or a `forEach` loop to iterate over the array

```javascript
const names = ["Alice", "Bob", "Charlie", "David", "Edward", "Fiona"];
```

<details>
<summary>Solution</summary>

```javascript
const names = ["Alice", "Bob", "Charlie", "David", "Edward", "Fiona"];

names.forEach((name) => sayHello(name));

// or

for (let i = 0; i < names.length; i++) {
  sayHello(names[i]);
}
```

</details>

### Exercise 8

Create a function called `sum` that takes two parameters that are numbers and it console logs the sum of the two numbers.

<details>
<summary>Solution</summary>

```javascript
function sum(a, b) {
  console.log(a + b);
}
sum(5, 3); // 8
```

</details>

### Exercise 9

Write a function called `convertToUpper` that converts a string to uppercase and logs it to the console.

<details>
<summary>Solution</summary>

```javascript
function convertToUpper(text) {
  console.log(text.toUpperCase());
}
convertToUpper("hello world");
```

</details>

### Exercise 10

Write a function called `checkEvenOdd` that checks if a number is even or odd and logs "Even" or "Odd".

<details>
<summary>Solution</summary>

```javascript
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
checkEvenOdd(7); // Odd
```

</details>

### Exercise 11

Create a function called `sumArray` that takes an array of numbers and returns the sum of all numbers.

<details>
<summary>Solution</summary>

```javascript
function sumArray(numbers) {
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  return sum;
}

// or with regular for loop
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // 15
```

</details>

### Exercise 12

Write a function called `splitString` that creates an array from a string, splitting it by a each character.

<details>
<summary>Solution</summary>

```javascript
function splitString(text) {
  return text.split("");
}

console.log(splitString("hello")); // ["h", "e", "l", "l", "o"]
```

</details>

### Exercise 13

Now write a function called `reverseString` that creates an array based on a string, then reverses the array and logs the result.

<details>
<summary>Solution</summary>

```javascript
function reverseString(text) {
  let reversed = text.split("").reverse();
  console.log(reversed);
}

reverseString("hello"); // ["o", "l", "l", "e", "h"]
```

</details>

### Exercise 14

Now that you know how to reverse an array, can you convert this array back to a string? Create a function called `arrayToString` that converts an array of characters back to a string. Use the next example to test your function:

```javascript
const characters = ["o", "l", "l", "e", "h"];
// expected result is "olleh"
```

<details>
<summary>Solution</summary>

```javascript
function arrayToString(arr) {
  return arr.join("");
}
```

</details>

### Exercise 15

After you've learned how to do this three steps, can you create a function that checks if a word is palindrome? A palindrome is a word that reads the same backward as forward. For example, "anna" is a palindrome.
Your function called `isPalindrome` will receive a string and should return `true` if the string is a palindrome and `false` if it is not.

<details>
<summary>Solution</summary>

```javascript
function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}
```

</details>

### Exercise 16

Create a function called `fizzBuzz` that logs every number from 1 to n, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".
Example: `fizzBuzz(10)` should log the following:

```plaintext
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
```

<details>
<summary>Solution</summary>

```javascript
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
  }
}
fizzBuzz(15);
```

</details>

### Exercise 17

Create a function called `findLongestWord` that takes an array of strings and logs the longest string.

<details>
<summary>Solution</summary>

```javascript
function findLongestString(strings) {
  let longest = "";
  strings.forEach((str) => {
    if (str.length > longest.length) {
      longest = str;
    }
  });
  console.log(longest);
}
findLongestString(["apple", "banana", "grapefruit"]);
```

</details>
