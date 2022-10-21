//Din uppgift är att du vill kombinera din förnamn och efternamn och du vill ha hur många bokstäver det finns total
//lägg till din ålder
/*
let firstName = "Yun"
const lastName = "Yi";
let fullName = `${firstName} ${lastName}`;
let myAge = 24;

// console.log(`Hello my name is: ${firstName} ${lastName} `);
console.log(`Hello my name is: ${fullName}`);
console.log(`Age: ${myAge}`); */

//uppgift:2 Beräkna (9000*2)+(1000/4)
/*
let score = 18250;

var numb1 = 9000;
var numb2 = 1000;

score = numb1 * 2;
score = numb2 / 4;

let totalScore = numb1 * 2 + numb2 / 4;

console.log(`Totala beräkning: ${numb1 * 2} + ${numb2 / 4}`);
console.log(`Total score: ${totalScore}`);
*/

//uppgift:3 Ta reda på hur man får boolean till true och false
/*
let results = [
    Boolean(-10),
    Boolean(-1),
    Boolean(0),
    Boolean(1),
];

console.log("Summary of boolean false or true");
for (let i = 0; i < results.length; i++) {
    console.log(`boolean() ${i} ${results[i]}`);
}
console.log(`number of boolean: ${results.length}`);
*/
//uppgit:4 ta reda på x ålder om det är true eller false
const maxAge = 65;
const minAge = 15;
let myAge = [
    myAges = 20,
    myAges = 25,
    myAges = 35,
    myAges = 45,
    
    
];


console.log("summary of true or false: ")
for (let i = 0; i < myAge.length; i++) {
    console.log(`age is `, myAge > minAge[i]);
    console.log(`age is `, myAge < maxAge[i]);
    console.log(`${i}| age: ${myAge[i]} `);
}
console.log(`numbers of people ages: ${myAge.length}`);
