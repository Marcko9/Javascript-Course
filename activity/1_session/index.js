// Ejercicio 1
import "./aboutme.js";
import { divisibleEntre7 } from "./divisibleEntre7.js";
console.log("Ejercicio 1");

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4
console.log ("Ejercicio 4")
divisibleEntre7();

// Ejercicio 5

// Ejercicio 6
let formatter = new Object({ 
    prefix: "Hello ", 
    append: function(arg) {
        console.log(formatter.prefix + arg);
    },
    toLowerCase: function(arg){
        return arg.toLowerCase();
        //console.log(arg.toLowerCase());
    }
});

/*Object.defineProperty(formatter, 'toLowerCase', {
    get: funtion (arg){
        console.log(arg.toLowerCase);
    }
});*/
//formatter.prototype('EEE');
//console.log(formatter.prototype('EEE'));

/*formatter.prototype.toLowerCase = function(arg){
    console.log(arg.toLowerCase());
}*/

console.log(formatter);
formatter.append("World");
formatter.toLowerCase("I'm Marcko");
//console.log(Object.getPrototypeOf(formatter));
