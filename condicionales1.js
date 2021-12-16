"use strict";

/*if-else: forma simplificada denominada OPERADOR TERNARIO*/
let edad = 9;

console.log("Operador ternario");

let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

console.log(eresMayor);

/*switch: sirve para situaciones en las que una variable va a tener diferentes variables
Ejemplo:
domingo: 0
lunes: 1
martes: 2
miercoles: 3
jueves: 4
viernes: 5
sabado: 6
*/

let dia = 0;
switch (dia) {
  case 0:
    console.log("domingo");
    break; //el break hace que si la variable coincide con este valor no continue a los otros casos que termine aqui el switch
  case 1:
    console.log("lunes");
    break;
  case 2:
    console.log("martes");
    break;
  case 3:
    console.log("miercoles");
    break;
  case 4:
    console.log("jueves");
    break;
  case 5:
    console.log("viernes");
    break;
  case 6:
    console.log("sabado");
    break;
  default:
    console.log("el dia no existe");
    break;
}
