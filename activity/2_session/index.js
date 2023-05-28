// Ejercicio 1

let person = {
    name: "Lucas",
    age: 27,
    profession: "Developer"
}

let showProperties = (myPerson) => {
    return Object.keys(myPerson);
}

console.log(showProperties(person));


// Ejercicio 2
//Programa principal
console.log(this);

//Función
function funcion1() {
    return this;
}

console.log(funcion1());
console.log(funcion1() === window);

//Función en modo estricto
function funcion2() {
    'use strict';
    return this;
}

console.log(funcion2());


//Método
let persona = {
    nombre: "Marco Ramírez",
    saludo() {
        console.log(`Hola mundo, me llamó ${this.nombre}`);
    }
}

persona.saludo();


//Arrow function
var nombreGato = "Garfield";

let miGato = {
    nombreGato: "Oddie",
    saludo: () => {
        console.log(`Soy un gato y me llamó ${this.nombreGato}`);
    }
}
miGato.saludo();

//Evento
function actionButtonReceiver() {
    console.log('Botón presionado');
    console.log(this);
}

//Call
var myObj = {
    num: 2
}

var addNumbers = function(num1, num2) {
    return this.num + num1 + num2;
}

console.log(`Call: ${addNumbers.call(myObj, 1, 9)} `);

//Apply
let params = [5, 3, 6, 9];
console.log(`Apply: ${ addNumbers.apply(myObj, params)}`);

//Bind
var otherObj = {
    num1: 5,
    num2: 9
};

var otherFunc = function() {
    return this.num1 + this.num2;
}

var returnedFunc = otherFunc.bind(otherObj);
console.log(`Bind: ${returnedFunc()}`);


//Function expression VS arrow function
//Sintaxis
let addFE = function(num1, num2) {
    return num1 + num2;
}

let addAF = (num1, num2) => {
    return num1 + num2;
}

console.log(`Function expression: ${addFE(1, 2)}`);
console.log(`Arrow function: ${addAF(3, 4)}`);

//Binding
let bindFE = {
    showArgs() {
        console.log(`Function expression:`);
        console.log(arguments);
    }
};

bindFE.showArgs(1, 2, 3, 4);

let bindAF = {
    showArgs: () => {
        console.log(`Arrow function:`);
        console.log(arguments);
    }
};
//bindAF.showArgs(1, 2, 3, 4);



//This
var nombre = "Lion";

let usuario = {
    nombre: "Marcko",
    thisInArrow: () => {
        console.log(`Arrow: El nombre del usuario es ${ this.nombre }`);
        console.log(`Arrow: El nombre del usuario es ${ usuario.nombre }`);
    },
    thisInArrowPassingElement: (nombreBind) => {
        console.log(`Arrow bind: El nombre del usuario es ${ nombreBind }`);
    },
    thisInRegular() {
        console.log(`Regular: El nombre del usuario es ${ this.nombre }`);
    },
    thisInRegularPassingElement(nombre) {
        console.log(`Regular bind: El nombre del usuario es ${ nombre }`);
    },

}

usuario.thisInArrow();
usuario.thisInArrowPassingElement('Tiger');
usuario.thisInRegular();
usuario.thisInRegularPassingElement('Dobby');


//New
function sumaFE(num1, num2) {
    console.log(`New FE: ${num1 + num2}`);
}
new sumaFE(1, 2);

let sumaAF = (num1, num2) => {
        console.log('New AE: ');
        console.log(num1 + num2);
    }
    //new sumaAF(1, 3);


//Duplicidad de parámetros
function restaFE(x, x) {
    console.log(`Param FE: ${ x - x}`);
}

let restaAF = (x, y) => {
    console.log(`Param AF: ${ x - x}`);
};

new restaFE(1, 2);




// Ejercicio 3
var cadenaInvertir = 'Cadena global'

class InvertirCadena {

    cadenaInvertir = 'Hola mundo';

    constructor(cadenaInvertir) {
        if (this.cadenaInvertir.length == 0)
            this.cadenaInvertir = 'Default';
    }

    imprimeCadenaInvertida() {
        try {
            if (this.cadenaInvertir.length == 0)
                throw new Error('Se ha enviado cadena vacía');
            console.log(this.cadenaInvertir);
            let arregloCadena = this.cadenaInvertir.split('');
            console.log(arregloCadena);
            let arregloCadenaInvertido = arregloCadena.reverse();
            console.log(arregloCadenaInvertido);
            let cadenaInvertida = arregloCadenaInvertido.join('');
            return cadenaInvertida;
        } catch (error) {
            console.log(error);
        }
    }
  };
  
  let invertirCadena = new InvertirCadena();
  console.log(invertirCadena.imprimeCadenaInvertida());
  invertirCadena.nuevoMetodo?.();
  
  
      /*
          imprimeCadenaInvertidaArrow = () => {
              let arregloCadena = this.cadenaInvertir.split('');
              console.log(arregloCadena);
              let arregloCadenaInvertido = arregloCadena.reverse();
              console.log(arregloCadenaInvertido);
              let cadenaInvertida = arregloCadenaInvertido.join('');
              return cadenaInvertida;
          }*/
  //console.log(invertirCadena.imprimeCadenaInvertidaArrow());


// Ejercicio 4

class Login{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    login(){
        if(this.username === 'admin' && this.password === 'passwd')
            alert('User logged in');
        else
            alert('User or password incorrect');
    }
}

let loginSuccess = new Login('admin', 'passwd');
// loginSuccess.login();
let loginFailure = new Login('pepe', 'bad');
// loginFailure.login();


// Ejercicio 5

const btnLogSuccess = document.getElementById('loginSuccess');
btnLogSuccess.addEventListener("click", (event) => { loginSuccess.login();});
const btnLoginFailure = document.getElementById('loginFailure');
btnLoginFailure.addEventListener("click", (event) => { loginFailure.login();});



// Ejercicio 6

const btnLoginSuccessAsync = document.getElementById('loginSuccessAsync');
btnLoginSuccessAsync.addEventListener('click', async () => {  
    await loginWitUsername('admin', 'passwd')
    .then((resolved) => {console.log(resolved);})
    .catch((rejected) => {console.log(rejected);}); 
});

const btnLogFailureAsync = document.getElementById('loginFailureAsync');
btnLogFailureAsync.addEventListener('click', async () => {  
    await loginWitUsername('pepe', 'bad')
    .then((resolved) => {console.log(resolved);})
    .catch((rejected) => {console.log(rejected);}); 
});

let loginWitUsername = (username, password) => {
    return new Promise(function(resolved, rejected) {
        setTimeout(() => {
            if (username === "admin" && password === "passwd") {
                resolved("User logged in");
            } else {
                rejected("Error: invalid username or password");
            }
        }, 200)
    });
};
// let loginWitUsername = (username, password) => {
//     return new Promise(function(resolve, rejected) {
//         setTimeout(() => {
//             if (username === "admin" && password === "passwd") {
//                 resolve("User logged in");
//             } else {
//                 rejected("Error: invalid username or password");
//             }
//         }, 200);
//     });
// };
