
// //Exercise 1: Create a variable called myName and assign it a string value. Log the variable to the console.

// let myName = "Christian";
// console.log(myName);

// //Exercise 2: Create a variable called myAge and assign it a number value. Log the variable to the console.

// let myAge = 34;
// console.log(myAge);

// //Exercise 3: Create a variable called myHobbies and assign it an array of string values. Log the variable to the console.

// let myHobbies = ["Reading", "Gaming", "Music"];
// console.log(myHobbies);


// //Exercise 4: Create a variable called myDog and assign it an object with properties of name, age, and breed. Log the variable to the console.




// //Exercise 5: With the variables created above, create a new object called myInfo. This object should have properties (keys) of name, age, hobbies, and dog. Log the variable to the console.

// let myInfo = {
//     name: myName,
//     age: myAge,
//     hobbies: myHobbies,
//     dog: myDog
// }

// //Exercise 6: Create a function called sayHello that takes in a name and logs the string "Hello, name". Call the function with the argument of your name.

// function sayHello(name){
//     console.log(`Hello, ${name}`);
// }
// sayHello("Christian");


// //Exercise 7: Given the array of names, create a loop to use the sayHello function to log "Hello, name" for each name in the array. Use a for loop or a forEach loop to iterate over the array.

// const names = ["Alice", "Bob", "Charlie", "David", "Edwuard", "Fiona",];

// names.forEach(name => {
//     sayHello(name);
// }
// );

// //Exercise 8: Create a function called sum that takes two parameters that are numbers and it console logs the sum of the two numbers.

// function sum(a, b){
//     console.log(a + b);
// }
// sum(5, 10);

// //Exercise 9: Write a function called convertToUpper that converts a string to uppercase and logs it to the console.

// function convertToUpper(string){

//     console.log(string.toUpperCase());
// }
// convertToUpper("hello"); 

// //Exercise 10: Write a function called checkEvenOdd that checks if a number is even or odd and logs "Even" or "Odd".

// function checkEvenOdd(number){
//     if(number % 2 ===0){
//         console.log("Even");
//     } else {

//         console.log("Odd");
//     }
// }
// checkEvenOdd(5);

// //Exercise 11: Create a function called sumArray that takes an array of numbers and returns the sum of all numbers.

// function sumArray(array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5]));

// //Exercise 12: Write a function called splitString that creates an array from a string, splitting it by a each character.

function splitString(string){
    let stringArray = string.split("");
    return stringArray;
} 

console.log(splitString("Hola"));