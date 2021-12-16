"use strict";

/*bucles: son parte de las estructuras de control, repiten una o un bloque de lineas de codigo en base a una condicion*/

/*while: con este siempre se va comparar primero antes de ejecutar el codigo dentro del while*/
let contador = 10;

while (contador < 10) {
  console.log("while: " + contador);
  contador++;
}

/*con do-while: se va a ejecutar al menos una vez el codigo dentro del do-while*/

do {
  console.log("do-while: " + contador);
  contador++;
} while (contador < 10);

/*for:  
for (inicializacion de variable; condicion; incremento o decremento) {
    sentencias que ejecuta el for
}
*/

for (let index = 0; index < 10; index++) {
  console.log("for: " + index);
}

let numeros = [10, 30, 40, 80, 90];

for (let i = 0; i < numeros.length; i++) {
  console.log("elementos de numeros: " + numeros[i]);
}

/*variantes del for: 
for in
for of
*/

/*for in: permite recorrer, iterar las propiedades de un objeto*/
const edy = {
  nombre: "geo",
  apellido: "padilla",
  edad: 31,
};

for (const propiedad in edy) {
  console.log("Propiedad: " + propiedad + ", Valor: " + edy[propiedad]);
}

/*for of: permite recorrer todos los elementos de cualquier objeto iterable(que pueda separar en sus elementos significa iterable)*/

for (const elemento of numeros) {
  console.log(elemento);
}

let str = "hola mundo";

for (const caracter of str) {
  console.log(caracter);
}
