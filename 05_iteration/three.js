// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "Hello World";

// for (const greet of greeting) {
//     console.log(greet);
// }


const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

for (const [key, value] of map) {
    console.log(`${key}:- ${value}`);
}