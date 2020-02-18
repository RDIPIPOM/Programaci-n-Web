var obj = {
    greet: 'hello'
}

//Formas de acceder a un atributo
console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

//functions and arrays
var arr = [];
arr.push(() => {
    console.log('Hello world 1');
});

arr.push(() => {
    console.log('Hello world 2');
});

arr.push(() => {
    console.log('Hello world 3');
});

arr.forEach(function(item){
    item();
});