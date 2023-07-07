let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 1, 23, 5, 3);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamps = Date.now();
// console.log(myTimeStamps);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());


console.log(newDate.toLocaleString('default', {weekday: "long"}));