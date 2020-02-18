/*x = 10;
var x;
console.log(`El valor de x es: ${x}`);*/

function Person(firstname, lastname){ //Clase persona creada
    this._firstname = firstname;
    this._lastname = lastname;
}

Person.prototype.greet = function(){//Añadimos el metodo greet a la clase prototipo
    console.log('Hello, ' + this._firstname + ' ' + this._lastname);
}

var john = new Person('John', 'Doe');

john.greet();

var jane = new Person('Jane', 'Doe');

jane.greet();

console.log(john.__proto__);//Nos retorna el contenido del objeto
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);//Retorna true y comprobamos que prototype es la misma clase en ambos