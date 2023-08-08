const user = {
    name: "Pritam",
    price: 99,

    welcomeMessage: function () {
        console.log(`${this.name}, welcome to the website.`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.name = "Sam";
// user.welcomeMessage()


function one () {
    name = "Pritam",
    console.log(name)
}

const chai = () => {
    name = "Pritam";
    console.log(name)
}

chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3, 4))



const add = (num1, num2) => (num1 + num2)
console.log(add(6, 8))

