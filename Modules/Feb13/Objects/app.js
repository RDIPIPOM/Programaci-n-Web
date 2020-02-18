/*
Object Literal => todo el objeto
*/

/*
var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function () { //No funcionó con la notacion de la flecha
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
}

person.greet();

console.log(person['firstname']);
*/
var greet = require('./greet1');//Exportamos el módulo para ejecutar el saludo
greet();

var greet2 = require('./greet2').greet;//Exportamos una sola funcion del modulo
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';//Cambiamos el saludo de la clase (no del objeto)para posteriormente ejecutarlo

var greet3b = require('./greet3');
greet3b.greet();//Ejecutamos el saludo cambiado

var Greet4 = require('./greet4');//Exportamos la clase para crear los objetos que queramos
var grtr = new Greet4();
grtr.greet();