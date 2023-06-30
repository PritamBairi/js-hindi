const name = "Pritam";
const repoCount = 50;

console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

console.log(name.length);

console.log(name.toUpperCase());

console.log(name);

console.log(name.charAt(2));

console.log(name.indexOf("P"));

const newName = name.substring(0, 3);

console.log(newName);

const anotherString = name.slice(-4, -2);
console.log(anotherString);


const newstringOne = "   Pritam    ";

console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://pritam.com/pritam%20bairi"
console.log(url.replace("%20", "-"));

console.log(url.includes("pritam"));

const myName = "Pritam-Kumar-Bairi";
console.log(myName.split("-"));