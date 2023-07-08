// const tinderUser = new Object();  -----  Singelton object
const tinderUser = {};           //  ------ non-Sinngelton object

tinderUser.id = "Pritam123";
tinderUser.name = "Pritam";
tinderUser.isLoggedin = true;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstName: "Pritam",
            lastName: "Bairi"
        }
    }

}

// console.log(regularUser.fullname.userFullname.firstName);


const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c", 4:"d"}

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};

// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("id"));



const course = {
    name: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course;

console.log(instructor);