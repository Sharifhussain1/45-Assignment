// Question=1
//Install Node.js, TypeScript and VS Code on your computer.
// Question=2
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
const person = "Eric";
console.log(`Hello ${person}, would you like to learn some Python today?`);
// Question=3
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Store a person's name in a variable
const personName2 = "Sharif Hussain";
// Convert the name to lowercase
const lowercaseName = personName2.toLowerCase();
// Convert the name to uppercase
const uppercaseName = personName2.toUpperCase();
// Convert the name to title case
const titleCaseName = personName2.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
// Print the name in lowercase, uppercase, and titlecase
console.log("Lowercase:", lowercaseName);
console.log("Uppercase:", uppercaseName);
console.log("Titlecase:", titleCaseName);
// Question=4
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:Albert Einstein once said, “A person who never made a mistake never tried anything new
const quote1 = "A person who never made a mistake never tried anything new.";
const author = "Albert Einstein";
console.log(`${author} once said, "${quote1}"`);
// Question=5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
const famous_Person = "Albert Einstein";
const quote2 = "A person who never made a mistake never tried anything new.";
const message = `${famous_Person} once said, "${quote2}"`;
console.log(message);
// Question=6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// Store a person's name with leading and trailing whitespace
const nameWithWhitespace = "\t\n   John Doe   \t\n";
// Print the name with whitespace
console.log("Name with whitespace:", nameWithWhitespace);
// Remove the leading and trailing whitespace
const strippedName = nameWithWhitespace.trim();
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
const favoriteNumber = 7;
const message1 = `My favorite number is ${favoriteNumber}.`;
console.log(message1);
//Question=9
// Program: Famous Quote
// Author: [Sharif Hussain]
// Date: [1st feb 2024]
// Description: This program prints a famous quote by Albert Einstein.
const famperson = "Shazad hussain";
const quote3 = "A person who never made a mistake never tried anything new.";
const message2 = `${famperson} once said, "${quote3}"`;
console.log(message2);
//Question=10
// Store the names of friends in an array called names
const names1 = ["Sharif", "Affan", "Fahad", "Shahzad"];
// Print each person's name by accessing each element in the list, one at a time
names1.forEach(name1 => console.log(name1));
//Question=11
// Store the names of friends in an array called names
const names2 = ["Alice", "Bob", "Charlie", "David"];
// Print a personalized message to each person
names2.forEach(name2 => console.log(`Hello ${name2}, I hope you're having a great day!`));
//Question=12
const favoriteTransportation = ["car", "motorcycle", "bicycle", "scooter"];
favoriteTransportation.forEach((transport) => {
    console.log(`I would like to own a ${transport}.`);
});
//Question=13
const guestList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
});
//Question=14
// Original guest list
const originalGuestList = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
// Print the guest who can't make it
const unableToAttend = "Marie Curie";
console.log(`${unableToAttend} can't make it to the dinner.`);
// New guest to invite
const newGuest = "Nelson Mandela";
// Update the guest list
const updatedGuestList = originalGuestList.map((guest) => guest === unableToAttend ? newGuest : guest);
// Send out invitations
updatedGuestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
});
//question=16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Original guest list
const originalGuestList1 = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
// Inform about the bigger dinner table
console.log("Great news! We've found a bigger dinner table!");
// New guests to invite
const newGuests = ["Nelson Mandela", "Ada Lovelace", "Steve Jobs"];
// Add one new guest to the beginning of the array
originalGuestList1.unshift(newGuests[0]);
// Add one new guest to the middle of the array
const middleIndex = Math.floor(originalGuestList1.length / 2);
originalGuestList1.splice(middleIndex, 0, newGuests[1]);
// Use append() to add one new guest to the end of the list
originalGuestList1.push(newGuests[2]);
// Send out invitations
originalGuestList1.forEach((guests) => {
    console.log(`Dear ${guests}, you are cordially invited to dinner. Please join us for an evening of stimulating conversation.`);
});
//question 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
// Original guest list
const originalGuestList2 = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Nelson Mandela", "Ada Lovelace", "Steve Jobs"];
// Inform about the limited dinner table space
console.log("We regret to inform you that due to unforeseen circumstances, we can only invite two people for dinner.");
// Remove guests until only two names remain
while (originalGuestList2.length > 2) {
    const removedGuest = originalGuestList2.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Invite the remaining two guests
originalGuestList2.forEach((guest) => {
    console.log(`Dear ${guest}, you are still invited to dinner. Please join us for an evening of stimulating conversation.`);
});
// Remove the last two names from the list
originalGuestList2.pop();
originalGuestList2.pop();
// Print the empty list to confirm
console.log("Final guest list:", originalGuestList2);
//question 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
// Array of places to visit
let placesToVisit = ["Japan", "Italy", "Australia", "Egypt", "Canada"];
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
const originalGuestList3 = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Nelson Mandela", "Ada Lovelace", "Steve Jobs"];
// Inform about the limited dinner table space
console.log("We regret to inform you that due to unforeseen circumstances, we can only invite two people for dinner.");
// Remove guests until only two names remain
while (originalGuestList3.length > 2) {
    const removedGuest = originalGuestList3.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
// Invite the remaining two guests
originalGuestList3.forEach((guest) => {
    console.log(`Dear ${guest}, you are still invited to dinner. Please join us for an evening of stimulating conversation.`);
});
// Print the number of people invited to dinner
console.log(`Number of people invited to dinner: ${originalGuestList3.length}`);
//question 20
// Array of famous landmarks
const landmarks = [
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
const cars = {
    car1: { make: "Toyota", model: "Camry", year: 2020 },
    car2: { make: "Honda", model: "Civic", year: 2019 },
    car3: { make: "Ford", model: "Mustang", year: 2021 },
    car4: { make: "Chevrolet", model: "Silverado", year: 2018 },
    car5: { make: "BMW", model: "X5", year: 2022 }
};
console.log("List of cars:", cars);
//question 22
const fruits = ["apple", "banana", "orange"];
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
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! The player just earned 5 points.");
}
//Failing version:
let alien_color1 = 'red';
if (alien_color1 === 'green') {
    console.log("Congratulations! The player just earned 5 points.");
}
//question 26
//Version running the if block (alien_color is 'green'):
let alien_color2 = 'green';
if (alien_color2 === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! The player just earned 10 points for shooting the non-green alien.");
}
//Version running the else block (alien_color is not 'green'):
let alien_color3 = 'red';
if (alien_color3 === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! The player just earned 10 points for shooting the non-green alien.");
}
// question 27
let alien_color4 = 'green';
if (alien_color4 === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting the green alien.");
}
else if (alien_color4 === 'yellow') {
    console.log("Congratulations! The player just earned 10 points for shooting the yellow alien.");
}
else if (alien_color4 === 'red') {
    console.log("Congratulations! The player just earned 15 points for shooting the red alien.");
}
let alien_color5 = 'yellow';
if (alien_color5 === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting the green alien.");
}
else if (alien_color5 === 'yellow') {
    console.log("Congratulations! The player just earned 10 points for shooting the yellow alien.");
}
else if (alien_color5 === 'red') {
    console.log("Congratulations! The player just earned 15 points for shooting the red alien.");
}
let alien_color6 = 'red';
if (alien_color6 === 'green') {
    console.log("Congratulations! The player just earned 5 points for shooting the green alien.");
}
else if (alien_color6 === 'yellow') {
    console.log("Congratulations! The player just earned 10 points for shooting the yellow alien.");
}
else if (alien_color6 === 'red') {
    console.log("Congratulations! The player just earned 15 points for shooting the red alien.");
}
//question 28
let age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//question 29
let favorite_fruits = ["banana", "apple", "strawberry"];
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
let usernames = ["admin", "john", "sarah", "emma", "chris"];
for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
//question 31
let usernames1 = [];
// Check if the list of users is not empty
if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let username2 of usernames1) {
        if (username2 === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username2}, thank you for logging in again.`);
        }
    }
}
// question 32
// List of current users
let current_users = ["john", "sarah", "emma", "chris", "mike"];
// List of new users
let new_users = ["sarah", "mike", "alice", "peter", "lisa"];
// Loop through the new_users list
for (let new_user of new_users) {
    // Convert both usernames to lowercase for case-insensitive comparison
    let lowercase_new_user = new_user.toLowerCase();
    // Check if the new username is already in use
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}
// question 33
// Store numbers 1 through 9 in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (let number of numbers) {
    // Check if the number is 1, 2, or 3 to determine the proper ordinal ending
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
// question 34
// Array of favorite pizza names
let pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Print the name of each pizza using a for loop
for (let pizza of pizzas) {
    console.log("I like " + pizza + " pizza.");
}
// Additional sentence about how much you like pizza
console.log("I really love pizza!");
// question 35
// List of animals with a common characteristic
let animals = ["dog", "cat", "rabbit"];
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
function make_shirt111(size1, message1) {
    console.log(`The shirt size is ${size1} and the message printed on it is: "${message1}".`);
}
// Call the make_shirt function with a size and message
make_shirt111("Large", "I love coding!");
// question 37
// Define the function make_shirt with default parameters
function make_shirt11(size2 = "Large", message2 = "I love TypeScript") {
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
function describe_city1(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
// Call the describe_city function for three different cities
describe_city1("Karachi");
describe_city1("Lahore");
describe_city1("London", "United Kingdom");
// question 39
// Define the function city_country
function city_country1(city, country) {
    return `${city}, ${country}`;
}
// Call the city_country function with three city-country pairs and print the returned value
console.log(city_country1("Lahore", "Pakistan"));
console.log(city_country1("New York", "United States"));
console.log(city_country1("Tokyo", "Japan"));
// question 40
// Define the function make_album with an optional parameter for the number of tracks
function make_album1(artist, title, tracks) {
    let album = {
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
function show_magici(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Array of magician's names
let magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the show_magicians function with the array of magician's names
show_magici(magicians);
// question 42
// Define the function show_magicians
function show_magician(magicians1) {
    for (let magician1 of magicians1) {
        console.log(magician1);
    }
}
// Define the function make_great to modify magician names
function make_great1(magicians1) {
    for (let i = 0; i < magicians1.length; i++) {
        magicians1[i] = "the Great " + magicians1[i];
    }
    return magicians1;
}
// Array of magician's names
let magicians1 = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the make_great function to modify magician names
magicians1 = make_great1(magicians1);
// Call the show_magicians function to display the modified list of magicians
show_magician(magicians1);
// question 43
// Define the function show_magicians
function show_magicians3(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Define the function make_great to modify magician names
function make_great3(magicians2) {
    let modified_magicians2 = [];
    for (let magician2 of magicians2) {
        modified_magicians2.push("the Great " + magician2);
    }
    return modified_magicians2;
}
// Array of magician's names
let magicians2 = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the make_great function with a copy of the array to modify magician names
let great_magicians2 = make_great3([...magicians2]);
// Call the show_magicians function with the original array to display the unchanged list of magicians
console.log("Original magicians:");
show_magicians3(magicians2);
// Call the show_magicians function with the modified array to display the list of magicians with "the Great" added to each name
console.log("\nModified magicians:");
show_magicians3(great_magicians2);
//question 44
// Define the function order_sandwich to accept variable number of sandwich items
function order_sandwich1(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    }
    else {
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
function store_car_info1(manufacturer, model, ...options) {
    let carInfo = {
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
export {};
