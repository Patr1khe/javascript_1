//alert("Hej Javascript från script.js");

// console.log("Hello console!");
// console.log(42);
// console.log("42")
/*
const students = 42;



let msg;
msg = "voff";
let cat = "mjau";
console.log(msg);
msg = "MOOOOO";
console.log(msg);
console.log(cat)*/
/*
let firstName = "Patrik";

console.log(firstName);

const lastName = "He";
let fullName = firstName + lastName;

// firstName = "Pelle";

console.log(fullName);

console.log("My name's " + firstName +" "+ lastName);

let helloMsg = "Hello " + firstName + " " + lastName;

console.log(helloMsg);

console.log(`Hello, my name's ${firstName} ${lastName}`);*/


// "firstNameOfStudent" // Camelcase
// "first_name_of_student" //snake_case

// "First-Name-Of-Student" //kebab-case

// let myName = "Patrik";
// console.log("My name's: ", myName);

// console.log("Length of name is: ", myName.length);

// console.log("First char in name is:", myName[0]);
// console.log("Second char in name is:", myName[1]);

// console.log("Name SHOUTED is:", myName.toUpperCase() )
// console.log("Name whispered is: " + myName.toLowerCase() )

// console.log("Position of 'i'", myName.indexOf('i') );
// console.log("Position of last 'k'", myName.lastIndexOf('k') );
// console.log("Position of 'P'", myName.lastIndexOf('P') );  

// console.log("Slice of Patrik", myName.slice(3, 5) );
// console.log("Tiny name:", myName.substr(3, 3) );

// console.log("Does name contain 'r'?", myName.includes('r') );

let email = "patrik.he@medieinstitutet.se";
let domain = email.lastIndexOf('.');

console.log("The last index of . is :", email.lastIndexOf('.'));
console.log("The top domain:", email.slice(domain) );
