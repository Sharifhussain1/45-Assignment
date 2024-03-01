
// Question=1
//Install Node.js, TypeScript and VS Code on your computer.

// Question=2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”


const person: string = "Eric";
console.log(`Hello ${person}, would you like to learn some Python today?`);

// Question=3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


// Store a person's name in a variable
const personName2: string = "Sharif Hussain";

// Convert the name to lowercase
const lowercaseName: string = personName2.toLowerCase();

// Convert the name to uppercase
const uppercaseName: string = personName2.toUpperCase();

// Convert the name to title case
const titleCaseName: string = personName2.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});

// Print the name in lowercase, uppercase, and titlecase
console.log("Lowercase:", lowercaseName);
console.log("Uppercase:", uppercaseName);
console.log("Titlecase:", titleCaseName);


// Question=4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:Albert Einstein once said, “A person who never made a mistake never tried anything new
const quote1: string = "A person who never made a mistake never tried anything new.";
const author: string = "Albert Einstein";

console.log(`${author} once said, "${quote1}"`);



// Question=5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.


const famous_Person: string = "Albert Einstein";
const quote2: string = "A person who never made a mistake never tried anything new.";

const message: string = `${famous_Person} once said, "${quote2}"`;

console.log(message);
// Question=6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.



// Store a person's name with leading and trailing whitespace
const nameWithWhitespace: string = "\t\n   John Doe   \t\n";

// Print the name with whitespace
console.log("Name with whitespace:", nameWithWhitespace);

// Remove the leading and trailing whitespace
const strippedName: string = nameWithWhitespace.trim();

// Print the stripped name
console.log("Stripped name:", strippedName);

//Question=6
// Addition
console.log("Addition:", 5 + 3);

// Subtraction
console.log("Subtraction:", 10 - 2);

// Multiplication
console.log("Multiplication:", 4 * 2);

// Division
console.log("Division:", 16 / 2);

//Question=7

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);


//Question=8

const favoriteNumber: number = 7;
const message1: string = `My favorite number is ${favoriteNumber}.`;

console.log(message1);


//Question=9

// Program: Famous Quote
// Author: [Sharif Hussain]
// Date: [1st feb 2024]
// Description: This program prints a famous quote by Albert Einstein.

const famperson: string = "Shazad hussain";
const quote3: string = "A person who never made a mistake never tried anything new.";

const message2: string = `${famperson} once said, "${quote3}"`;

console.log(message2);

//Question=10

// Store the names of friends in an array called names
const names1: string[] = ["Sharif", "Affan", "Fahad", "Shahzad"];

// Print each person's name by accessing each element in the list, one at a time
names1.forEach(name1 => console.log(name1));

//Question=11

// Store the names of friends in an array called names
const names2: string[] = ["Alice", "Bob", "Charlie", "David"];

// Print a personalized message to each person
names2.forEach(name2 => console.log(`Hello ${name2}, I hope you're having a great day!`));

//Question=12

const favoriteTransportation: string[] = ["car", "motorcycle", "bicycle", "scooter"];

favoriteTransportation.forEach((transport: string) => {
    console.log(`I would like to own a ${transport}.`);
});

//Question=13

const guestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

guestList.forEach((guest: string) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
});

//Question=14

// Original guest list
const originalGuestList: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Print the guest who can't make it
const unableToAttend: string = "Marie Curie";
console.log(`${unableToAttend} can't make it to the dinner.`);

// New guest to invite
const newGuest: string = "Nelson Mandela";

// Update the guest list
const updatedGuestList: string[] = originalGuestList.map((guest: string) => guest === unableToAttend ? newGuest : guest);

// Send out invitations
updatedGuestList.forEach((guest: string) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
});

//question=16
// Original guest list
const originalGuestList1: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];

// Inform about the bigger dinner table
console.log("Great news! We've found a bigger dinner table!");

// New guests to invite
const newGuests: string[] = ["Nelson Mandela", "Ada Lovelace", "Steve Jobs"];

// Add one new guest to the beginning of the array
originalGuestList1.unshift(newGuests[0]);

// Add one new guest to the middle of the array
const middleIndex: number = Math.floor(originalGuestList1.length / 2);
originalGuestList1.splice(middleIndex, 0, newGuests[1]);

// Use append() to add one new guest to the end of the list
originalGuestList1.push(newGuests[2]);

// Send out invitations
originalGuestList1.forEach((guests: string) => {
    console.log(`Dear ${guests}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
});
//question 17
// Original guest list
const originalGuestList2: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Nelson Mandela", "Ada Lovelace", "Steve Jobs"];

// Inform about the limited dinner table space
console.log("We regret to inform you that due to unforeseen circumstances, we can only invite two people for dinner.");

// Remove guests until only two names remain
while (originalGuestList2.length > 2) {
    const removedGuest: string = originalGuestList2.pop()!;
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Invite the remaining two guests
originalGuestList2.forEach((guest: string) => {
    console.log(`Dear ${guest}, you are still invited to dinner. Please join us for an evening of stimulating conversation.`);
});

// Remove the last two names from the list
originalGuestList2.pop();
originalGuestList2.pop();

// Print the empty list to confirm
console.log("Final guest list:", originalGuestList2);

//question 18
// Array of places to visit
let placesToVisit: string[] = ["Japan", "Italy", "Australia", "Egypt", "Canada"];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Original order after sorting:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Original order after reverse sorting:", placesToVisit);

// Reverse the order of the list
placesToVisit = placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again
placesToVisit = placesToVisit.reverse();
console.log("Original order after reversing again:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
//question 19
// Original guest list
const originalGuestList3: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Nelson Mandela", "Ada Lovelace", "Steve Jobs"];

// Inform about the limited dinner table space
console.log("We regret to inform you that due to unforeseen circumstances, we can only invite two people for dinner.");

// Remove guests until only two names remain
while (originalGuestList3.length > 2) {
    const removedGuest: string = originalGuestList3.pop()!;
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Invite the remaining two guests
originalGuestList3.forEach((guest: string) => {
    console.log(`Dear ${guest}, you are still invited to dinner. Please join us for an evening of stimulating conversation.`);
});

// Print the number of people invited to dinner
console.log(`Number of people invited to dinner: ${originalGuestList3.length}`);

//question 20
// Array of famous landmarks
const landmarks: string[] = [
    "Eiffel Tower",
    "Great Wall of China",
    "Statue of Liberty",
    "Taj Mahal",
    "Machu Picchu",
    "Sydney Opera House",
    "Colosseum",
    "Christ the Redeemer",
    "Petra",
    "Angkor Wat"
];

console.log("List of famous landmarks:", landmarks);
//question 21
// Object representing different cars
const cars: { [key: string]: { make: string, model: string, year: number } } = {
    car1: { make: "Toyota", model: "Camry", year: 2020 },
    car2: { make: "Honda", model: "Civic", year: 2019 },
    car3: { make: "Ford", model: "Mustang", year: 2021 },
    car4: { make: "Chevrolet", model: "Silverado", year: 2018 },
    car5: { make: "BMW", model: "X5", year: 2022 }
};

console.log("List of cars:", cars);
//question 22
const fruits: string[] = ["apple", "banana", "orange"];

// Accessing an index that is out of bounds to create an error
console.log(fruits[3]); // This will produce an error

// Correcting the error by accessing a valid index
console.log(fruits[2]); // This will print "orange"
//question 23
let x = 5;
let y = 10;

// Test 1: Check if x is equal to 5
console.log("Is x equal to 5? I predict True.");
console.log(x == 5);

// Test 2: Check if y is greater than 5
console.log("Is y greater than 5? I predict True.");
console.log(y > 5);

// Test 3: Check if x is less than or equal to 5
console.log("Is x less than or equal to 5? I predict True.");
console.log(x <= 5);

// Test 4: Check if y is not equal to 10
console.log("Is y not equal to 10? I predict False.");
console.log(y != 10);

// Test 5: Check if x plus y equals 15
console.log("Is x plus y equal to 15? I predict True.");
console.log(x + y == 15);

// Test 6: Check if x is greater than y
console.log("Is x greater than y? I predict False.");
console.log(x > y);

// Test 7: Check if x is not equal to 10
console.log("Is x not equal to 10? I predict True.");
console.log(x != 10);

// Test 8: Check if y minus x equals 5
console.log("Is y minus x equal to 5? I predict True.");
console.log(y - x == 5);

// Test 9: Check if y is less than or equal to 10
console.log("Is y less than or equal to 10? I predict True.");
console.log(y <= 10);

// Test 10: Check if x multiplied by y equals 50
console.log("Is x multiplied by y equal to 50? I predict False.");
console.log(x * y == 50);
//question 24
// Tests for equality and inequality with strings
let string1 = 'apple';
let string2 = 'banana';

console.log("Is string1 equal to 'apple'? I predict True.");
console.log(string1 == 'apple');

console.log("Is string2 not equal to 'apple'? I predict True.");
console.log(string2 != 'apple');

// Tests using the lower case function
let lowercaseString = 'HELLO';

console.log("Is lowercaseString equal to 'hello' in lowercase? I predict True.");
console.log(lowercaseString.toLowerCase() == 'hello');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 = 10;
let num2 = 20;

console.log("Is num1 equal to 10? I predict True.");
console.log(num1 == 10);

console.log("Is num2 greater than num1? I predict True.");
console.log(num2 > num1);

console.log("Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
let condition1 = true;
let condition2 = false;

console.log("Is condition1 true and condition2 false? I predict False.");
console.log(condition1 && condition2);

console.log("Is condition1 true or condition2 false? I predict True.");
console.log(condition1 || condition2);

// Test whether an item is in an array
let fruits1 = ['apple', 'banana', 'orange'];

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits1.includes('apple'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits1.includes('grape'));

//question 25
//Passing version:


let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! The player just earned 5 points.");
}
//Failing version:


let alien_color1: string = 'red';

if (alien_color1 === 'green') {
    console.log("Congratulations! The player just earned 5 points.");
}
//question 26
//Version running the if block (alien_color is 'green'):


let alien_color2: string = 'green';

if (alien_color2 === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! The player just earned 10 points for shooting the non-green alien.");
}
//Version running the else block (alien_color is not 'green'):


let alien_color3: string = 'red';

if (alien_color3 === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! The player just earned 10 points for shooting the non-green alien.");
}
// question 27
let alien_color4: string = 'green';

if (alien_color4 === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting the green alien.");
} else if (alien_color4 === 'yellow') {
    console.log("Congratulations! The player just earned 10 points for shooting the yellow alien.");
} else if (alien_color4 === 'red') {
    console.log("Congratulations! The player just earned 15 points for shooting the red alien.");
}
let alien_color5: string = 'yellow';

if (alien_color5 === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting the green alien.");
} else if (alien_color5 === 'yellow') {
    console.log("Congratulations! The player just earned 10 points for shooting the yellow alien.");
} else if (alien_color5 === 'red') {
    console.log("Congratulations! The player just earned 15 points for shooting the red alien.");
}
let alien_color6: string = 'red';

if (alien_color6 === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting the green alien.");
} else if (alien_color6 === 'yellow') {
    console.log("Congratulations! The player just earned 10 points for shooting the yellow alien.");
} else if (alien_color6 === 'red') {
    console.log("Congratulations! The player just earned 15 points for shooting the red alien.");
}

//question 28
let age: number = 30;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}
//question 29
let favorite_fruits: string[] = ["banana", "apple", "strawberry"];

if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!");
}
// question 30
let usernames: string[] = ["admin", "john", "sarah", "emma", "chris"];

for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//question 31
let usernames1: string[] = [];

// Check if the list of users is not empty
if (usernames1.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username2 of usernames1) {
        if (username2 === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username2}, thank you for logging in again.`);
        }
    }
}
// question 32
// List of current users
let current_users: string[] = ["john", "sarah", "emma", "chris", "mike"];

// List of new users
let new_users: string[] = ["sarah", "mike", "alice", "peter", "lisa"];

// Loop through the new_users list
for (let new_user of new_users) {
    // Convert both usernames to lowercase for case-insensitive comparison
    let lowercase_new_user = new_user.toLowerCase();

    // Check if the new username is already in use
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}
// question 33
// Store numbers 1 through 9 in an array
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
    // Check if the number is 1, 2, or 3 to determine the proper ordinal ending
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}
// question 34
// Array of favorite pizza names
let pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Print the name of each pizza using a for loop
for (let pizza of pizzas) {
    console.log("I like " + pizza + " pizza.");
}

// Additional sentence about how much you like pizza
console.log("I really love pizza!");
// question 35
// List of animals with a common characteristic
let animals: string[] = ["dog", "cat", "rabbit"];

// Print the name of each animal using a for loop
for (let animal of animals) {
    console.log(animal.charAt(0).toUpperCase() + animal.slice(1));
}

// Print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

// Print a statement about what these animals have in common
console.log("Any of these animals would make a great pet!");
// question 36
// Define the function make_shirt
function make_shirt111(size1: string, message1: string): void {
    console.log(`The shirt size is ${size1} and the message printed on it is: "${message1}".`);
}

// Call the make_shirt function with a size and message
make_shirt111("Large", "I love coding!");


// question 37
// Define the function make_shirt with default parameters
function make_shirt11(size2: string = "Large", message2: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size2} and the message printed on it is: "${message2}".`);
}

// Call the make_shirt function with default parameters for a large shirt
make_shirt11();

// Call the make_shirt function with default parameters for a medium shirt
make_shirt11("Medium");

// Call the make_shirt function with a different message for a small shirt
make_shirt11("Small", "Keep calm and code on!");
// question 38
// Define the function describe_city with a default parameter for country
function describe_city1(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the describe_city function for three different cities
describe_city1("Karachi");
describe_city1("Lahore");
describe_city1("London", "United Kingdom");
// question 39
// Define the function city_country
function city_country1(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the city_country function with three city-country pairs and print the returned value
console.log(city_country1("Lahore", "Pakistan"));
console.log(city_country1("New York", "United States"));
console.log(city_country1("Tokyo", "Japan"));
// question 40
// Define the function make_album with an optional parameter for the number of tracks
function make_album1(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Make three function calls to create different album objects
let album1 = make_album1("Taylor Swift", "1989");
let album2 = make_album1("Ed Sheeran", "÷", 16);
let album3 = make_album1("Adele", "25");

// Print each album object to show the album information
console.log(album1);
console.log(album2);
console.log(album3);
 // question 41
 // Define the function show_magicians
function show_magici(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the show_magicians function with the array of magician's names
show_magici(magicians);
// question 42
// Define the function show_magicians
function show_magician(magicians1: string[]): void {
    for (let magician1 of magicians1) {
        console.log(magician1);
    }
}

// Define the function make_great to modify magician names
function make_great1(magicians1: string[]): string[] {
    for (let i = 0; i < magicians1.length; i++) {
        magicians1[i] = "the Great " + magicians1[i];
    }
    return magicians1;
}

// Array of magician's names
let magicians1: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the make_great function to modify magician names
magicians1 = make_great1(magicians1);

// Call the show_magicians function to display the modified list of magicians
show_magician(magicians1);


// question 43

// Define the function show_magicians
function show_magicians3(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the function make_great to modify magician names
function make_great3(magicians2: string[]): string[] {
    let modified_magicians2: string[] = [];
    for (let magician2 of magicians2) {
        modified_magicians2.push("the Great " + magician2);
    }
    return modified_magicians2;
}

// Array of magician's names
let magicians2: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the make_great function with a copy of the array to modify magician names
let great_magicians2: string[] = make_great3([...magicians2]);

// Call the show_magicians function with the original array to display the unchanged list of magicians
console.log("Original magicians:");
show_magicians3(magicians2);

// Call the show_magicians function with the modified array to display the list of magicians with "the Great" added to each name
console.log("\nModified magicians:");
show_magicians3(great_magicians2);
//question 44
// Define the function order_sandwich to accept variable number of sandwich items
function order_sandwich1(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (let item of items) {
            console.log("- " + item);
        }
    }
    console.log(""); // Add a newline for clarity
}

// Call the order_sandwich function three times with different number of arguments
order_sandwich1("Turkey", "Cheese", "Lettuce", "Tomato");
order_sandwich1("Ham", "Swiss Cheese");
order_sandwich1("Vegetarian Option");
// question 45
// Define the function to store information about a car
function store_car_info1(manufacturer: string, model: string, ...options: { [key: string]: any }[]): object {
    let carInfo: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    // Loop through the options and add them to the carInfo object
    for (let option of options) {
        for (let key in option) {
            carInfo[key] = option[key];
        }
    }

    return carInfo;
}

// Call the function with required information and additional name-value pairs
let carInfo = store_car_info1("Toyota", "Camry", { color: "blue" }, { mileage: 5000 });

// Print the object returned by the function
console.log(carInfo);

