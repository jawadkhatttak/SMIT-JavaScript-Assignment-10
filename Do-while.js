// Assignment 1: Print Numbers
// Write a JavaScript program that uses a do-while loop to print the numbers from 1 to 10

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// Assignment 2: Sum of Numbers
// Write a JavaScript program that uses a do-while loop to calculate the sum of numbers from 1 to 10.


let sum = 0
let counter = 1;
do {
    sum+=counter
    counter++;
} while (counter <= 10);
console.log("Sum of Nums 1-10 : ",sum)


// Assignment 3: Guessing Game
// Write a JavaScript program that uses a do-while loop to play a guessing game, where the user has to guess a randomly generated number between 1 and 100.

let num;
let rando = Math.floor(Math.random() * 100) + 1;

do {
    num = Number(prompt("Guess the number between 1 and 100:"));
    if (num < rando) {
        console.log("A little higher!");
    } else if (num > rando) {
        console.log("A little lower!");
    } else {
        console.log("Congratulations, you guessed it right!");
    }
} while (num !== rando);


// Assignment 4: Factorial
// Write a JavaScript program that uses a do-while loop to calculate the factorial of a given number.


let num1 = Number(prompt("Enter a number: "));
let input = num1;
let factorial = 1;

do {
    factorial *= num1;
    num1--;
} while (num1 > 0);

console.log("Factorial of", input, "is", factorial);


/// Assignment 5: Multiplication Table
// Write a JavaScript program that uses a do-while loop to print the multiplication table for a given number (e.g., 5).

let table = 5;
do {
    console.log("Table of", table);
    for (let i = 1; i <= 10; i++) {
        console.log(table, "x", i, "=", table * i);
    }
    console.log("---------"); 
    table++;
} while (table <= 5); 

