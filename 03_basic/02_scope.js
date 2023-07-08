let a = 10;
// var b = 20;
const c = 30;

if (true) {
    var b = 20;
}
// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Pritam";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    // two()

}

// one()



if (true) {
    const username = "Pritam";

    if (username === "Pritam"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


console.log(addOne(5));
function addOne(num){
    return num + 1;
}

// addOne(5);

const addTwo = function(num){
    return num + 2;
}

addTwo(5)