/**
 * Control Flow ๐ฎ๐ฝ๐โ๐ป
 */

const minAge = 18;
const maxAge = 65;

let age = 75;

/**
 * Logical Operators
 *
 * && = AND (both has to be true)
 * || = OR (at least one has to be true)
 */

/*
//   30 >= 18     &&  30 <= 65
//     true       &&   true
//               true
if (age >= minAge && age <= maxAge) {
	// true
	console.log("Access granted");
} else {
	// false
	console.log("You're either too young or too old");
}

let username = "johan";
//   "johan" === "dave" ||  "johan" === "johan"
//          false       ||         true
//                     true
if (username === "dave" || username === "johan") {
	console.log(`I'm sorry ${username}, I can't open the doors.`);
} else {
	console.log("Welcome!");
}

// More advanced if-statement
if (age >= minAge && age <= maxAge) {
	console.log(`You are between ${minAge} and ${maxAge} years old, congrats!`);
} else if (age < minAge) {
	console.log('Too young! ๐ถ๐ฝ');
} else {
	console.log('Too old! ๐ต๐ป');
}
*/

/**
 * for-loop
 */
/*
console.log("Yey loop!");

const maxLoops = 10;

for (let i = 0; i < maxLoops; i++) {
	console.log("We're looping ๐ฅต, at loop number " + i)
}

// nu รคr vi snurriga av allt loopande
console.log('๐คข');
*/

let students = [
	"Deadpool",		// 0
	"Black Widow",	// 1
	"Iron Man",		// 2
	"Spider-Man",	// 3
	"Wanda",		// 4
	"Thanos",		// 5
];

console.log("Class of 2022:");
for (let i = 0; i < students.length; i++) {
	console.log(`Student at index ${i} is: ${students[i]}`);
}
console.log(`Number of students: ${students.length}`);
