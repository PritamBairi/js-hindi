function sayMyName (){
    console.log("P");
    console.log("r");
    console.log("i");
    console.log("t");
    console.log("a");
    console.log("m");
}


// sayMyName();

const name = function(){
    console.log("Pritam Bairi");
}

// name();


// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumber(3, 4)


function addTwoNumber(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumber(5, 7);
// console.log("result: ",result);


function loginUserMessage(userName){
    if (userName){
        return `${userName} just logged in.`
    }
    return `Please enter a username.`
}

// console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(3, 2, 4));


const user = {
    username: "Pritam",
    price: 199
}
    

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user);


const array = [200, 300, 400, 677];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(array));