// const usreEmail = "Pritam123@gmail.com";

// if (usreEmail) {
//     console.log("Got the user email.");
// } else {
//     console.log("Don't have user email.");
// }

const arr = []

if (arr.length !== 0) {
    console.log(true);
} else { 
    console.log(false);
}

const empObj = {};

if (Object.keys(empObj).length !== 0) {
    console.log(true);
} else {
    console.log(false);
}


let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 67;
val1 = null ?? 45 ?? 76;
// console.log(val1);


const price = 100;

(price <= 80) ? console.log("less than 80") : console.log("more than 80");