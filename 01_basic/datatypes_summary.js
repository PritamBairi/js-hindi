// Primitive data types

// 7 ypes :-- String, Number, Boolean, Null, Undefined, Symbol, BigInt

const name = "Pritam";
const score = 90;
const scorevalue = 90.7;
const isLoggedIn = false;
const outsidetemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 32366767564983575978547854n;

console.log(typeof bigNumber);


// Reference(Non-Primitive) data types

// Array, Object, Function

const heros = ["Superman", "Spiderman", "Thor", "Batman", "Hulk"];

let myObj = {
    name : "Pritam",
    age: 22,
}


const myFunction = function(){
    console.log("Hello World");
}




// Stack(Primitive), Heap (Non-Primitive)


let userName = "Pritam";
let anotherUserName = userName;
anotherUserName = "Sourav";

console.log(userName);
console.log(anotherUserName);


let userOne = {
    name: "Pritam",
    email: "pritam@gmail.com",
}


let userTwo = userOne;

userTwo.email = "pritam20@gmail.com";

console.log(userOne);
console.log(userTwo);