// Assignment 1: Fibonacci Sequence (imp)
// Write a JavaScript program that uses a while loop to print the first 10 numbers in the Fibonacci sequence.

console.log("Fiboacci Sequence")
let a = 0;
let b = 1;

console.log(a);

let count = 1;

while (count < 10) {
    console.log(b);

    let next = a + b;

    a = b;
    b = next;

    count++;
}

// Assignment 2: Guessing Game (imp)
// Write a JavaScript program that uses a while loop to play a guessing game, where the user has to guess a randomly generated number between 1 and 100.

// Example:
// Enter a number: 50
// Too low! Try again.
// Enter a number: 75
// Too high! Try again.
// Enter a number: 67

console.log("Guessing Game")

let randomNumber = Math.floor(Math.random() * 100) + 1;

let guess = 0;

while (guess !== randomNumber) {
    guess = parseInt(prompt("Enter a number:"));

    if (guess < randomNumber) {
        console.log("Too low! Try again.");
    } else if (guess > randomNumber) {
        console.log("Too high! Try again.");
    }
}

console.log("Congratulations! You guessed the correct number.");

// Assignment 3: Reverse String
// Write a JavaScript program that uses a while loop to reverse a given string.

let string = prompt("Enter Any String : ")
console.log("Original String : ", string)
let reverse = ""
let lengthh = string.length - 1

while (lengthh >= 0) {
    reverse += string[lengthh]
    lengthh--
}
console.log("Reverse String : ", reverse)

// Assignment 4: Find Prime Numbers
// Write a JavaScript program that uses a while loop to find all prime numbers between 1 and 100

let primeNums = [];
let num = 100;


while (num > 1) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false; 
      break;
    }
  }

  if (isPrime) {
    primeNums.push(num); 
  }

  num--;
}

console.log("All Prime Numbers:", primeNums);


// Assignment 5: Power of a Number
// Write a JavaScript program that uses a while loop to calculate the power of a given number (e.g., 2^3 = 8).

let base = 2;
let exponent = 3;
let result = 1;
let exp = exponent

while (exp > 0) {
  result *= base;
  exp--;
}

console.log(`${base} raised to the power of ${exponent} is ${result}`);


// Assignment 6: Palindrome Checker (imp)
// Write a JavaScript program that uses a while loop to check if a given string is a palindrome (reads the same backward and forward).

let string1 = prompt("Enter a string: ");
let reversed = "";
let length = string1.length - 1;

while (length >= 0) {
  reversed += string1[length];
  length--;
}

if (string1 === reversed) {
  console.log(`${string1} is a palindrome.`);
} else {
  console.log(`${string1} is not a palindrome.`);
}


