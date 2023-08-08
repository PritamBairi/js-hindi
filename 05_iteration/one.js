// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (element === 5) {
//         console.log("5 is the best number.");
//     }
//     console.log(element);
    
// }



// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 2; j++) {
//         console.log(`Outer loop value: ${j} and inner loop value: ${i}`);

//     }
// }


// myArr = ["Batman", "Superman", "Ironman"];

// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     console.log(element);
// }


for (let i = 0; i <= 10; i++){
    if (i === 5) {
        console.log("Detected 5");
        break
    }
    console.log(`value of i is: ${i}`)
}

for (let i = 0; i <= 10; i++){
    if (i === 5) {
        console.log("Detected 5");
        continue
    }
    console.log(`value of i is: ${i}`)
}