/*
Topics showed
-Arrow functions
-Anonymous function
-Function as parameter
-String literals
-Interpolación
*/

/*let greet = () => { //Function expression
    console.log(`Hi`);
}

greet();*/

// functions are first-class when you can set the function as parameter


//logGreeting(greet);

let logGreeting = (fn) => {
    fn();
}

logGreeting(() => { //Funcion as parameter also named 'Function expression on the fly'
    console.log(`Hi`);
});