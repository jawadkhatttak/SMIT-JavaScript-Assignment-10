// Assignment 1:
// Write a JavaScript program that uses a switch statement to print the day of the week based on a given number (1-7).

let day = "";
let key = 6;
switch (key) {
  case 1:
    day = "Sunday";
    break;
  case 2:
    day = "Monday";
    break;
  case 3:
    day = "Tuesday";
    break;
  case 4:
    day = "Wednesday";
    break;
  case 5:
    day = "Thursday";
    break;
  case 6:
    day = "Friday";
    break;
  case 7:
    day = "Saturday";
    break;

  default:
    day = "Invalid Input";
    break;
}
console.log(`Today is ${day}! `);

//     Assignment 2:
// Write a JavaScript program that uses a switch statement to print the name of a month based on a given number (1-12).

let month = "";
let key1 = 6;
switch (key1) {
  case 1:
    month = "January";
    break;
  case 2:
    month = "February";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "Aprail";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "July";
    break;
  case 8:
    month = "August";
    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "October";
    break;
  case 11:
    month = "November";
    break;
  case 12:
    month = "December";
    break;

  default:
    month = "Invalid Input";
    break;
}
console.log(`Current month is ${month}! `);

//     Assignment 3:
// Write a JavaScript program that uses a switch statement to determine the type of a vehicle based on a given string ("car", "truck", "motorcycle", etc.).

let vehicle = "car";
switch (vehicle) {
  case "car":
    console.log("This is a car.");
    break;
  case "truck":
    console.log("This is a truck.");
    break;
  case "motorcycle":
    console.log("This is a motorcycle.");
    break;
  default:
    console.log("This is an unknown vehicle.");
    break;
}

// Assignment 4:
// Write a JavaScript program that uses a switch statement to calculate the cost of shipping based on the weight of a package (0-10 pounds, 11-20 pounds, etc.).

let weight = 15;
let shippingCost = 0;
switch (true) {
  case weight <= 10:
    shippingCost = 1.5;
    break;
  case weight <= 20:
    shippingCost = 2;
    break;
  default:
    shippingCost = 2.5;
    break;
}
console.log(
  `Shipping cost for a package weighing ${weight} pounds is $${shippingCost}.`
);

// Assignment 5:
// Write a JavaScript program that uses a switch statement to determine the grade of a student based on their score (A: 90-100, B: 80-89, C: 70-79, etc.).

let score = 85;
switch (true) {
    case score >= 90 && score <= 100:
        grade = "A";
        break;
    case score >= 80 && score < 90:
        grade = "B";
        break;
    case score >= 70 && score < 80:
        grade = "C";
        break;
    case score >= 60 && score < 70:
        grade = "D";
        break;
    case score >= 0 && score < 60:
        grade = "F";
        break;
    default:
        grade = "Invalid score";
        break;
}
console.log(`The student's grade is ${grade}.`);





