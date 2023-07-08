
const mySym = Symbol("key1")
const JsUser = {
    name: "Pritam",
    "full name": "Pritam bairi",
    [mySym]: "myKey1",
    age: 22,
    location: "Ghatal",
    email: "pritambairi@gmail.com",
    isLoggedIn: true,
    lastLoggedIn: ["Monday", "Sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "pritam@gmail.com";

// console.log(JsUser["email"]);

// Object.freeze(JsUser);

JsUser.email = "hfjhd";

// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello Js user.");
}

JsUser.greeting2 = function() {
    console.log(`Hello Js user ${this.name}`);
}

JsUser.greeting();
JsUser.greeting2();
