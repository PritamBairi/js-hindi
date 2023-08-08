
(function chai() {
    console.log("DB CONNECTED")
})();

( () => {
    console.log("DB CONNECTED")
}

) ();

( (name) => {
    console.log(`DB COONECTED TO ${name}`);
}
) ("Pritam");

((num1, num2) => (console.log(num1 - num2))) (6, 2);