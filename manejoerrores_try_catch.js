"use strict";

/*es una estructura que nos permite evaluar ciertos fragmentos de codigo y genere un error se lo captura el catch, lo que permite gestionar los errores*/

//try: donde vamos a estar de evaluar, ejecutar nuestro codigo
try {
  console.log("en el try se agrega el codigo a evaluar");
  /*entonces por ejemplo: aqui llamamos a una variable que no hemos declarado ni inicializado, esto dara un error; pero ya que estamos manejando con el try-catch los errores no nos aparece en consola el normal mensaje de error sino que ejecutara el codigo del bloque catch que es el que maneja los errores que aparecen, la variable error almacena el error por lo cual al imprimirla con un console.log(error) nos muestra cual es el error; en este caso nos dice ReferenceError: noExiste is not defined, que es el error porque esta variable noExiste no ha sido declarada ni inicializada*/
  noExiste;
  /*A partir de que se detecta error se para la ejecucion: en este caso no se ejecutaran el codigo que este despues del error de la variable noExiste*/
  console.log("segundo mensaje en el try");
} catch (error) {
  //si en el try se da o genera algun error, aqui en el catch es donde se va a capturar dicho error
  console.log("catch captura cualquier error surgido o lanzado en el try");
  console.log(error);
} finally {
  //se ejecuta siempre haya o no error
  console.log(
    "el bloque finally se ejecutara siempre al final de un bloque try - catch"
  );
}

/*Este manejo de errores es muy util por ejemplo los desarrolladores de APIS utilizan esto para mandar mensajes en caso de que no se le pase o mande la informacion correcta que requiere la API*/

/*Ejemplo

*/
console.log("Probando la logica del try-catch ejemplo");
try {
  let numero = "z";

  if (isNaN(numero)) {
    /*esta comprobacion si se cumple sera el error entonces lo personalizamos, para lo cual lo manejamos con la palabra reservada throw le indicamos que es un nuevo error con new y le indicamos que tipo de error (en javascript hay varios tipos de error pero el mas comun que se utiliza es el Error y le pasamos el mensaje que queremos que muestre), entonces si esta condicion es verdadera detendra la ejecucion aqui y no se mostrara el console.log(numero * numero) */
    throw new Error("El caracter introducido no es un numero");
  }

  console.log(numero * numero);
} catch (error) {
  /*entonces el mensaje personalizado de nuestro error se guarda en la variable error, por lo cual para imprimir ese mensaje llamamos a la variable error, eso mostrara nuestro mensaje de error personalizado*/
  console.log("Se produjo el siguiente error: " + error);
}

/*el manejo de errores por medio del try-catch ayuda por ejemplo en situciones donde esperamos en una aplicacion recibir cierto tipo de dato, entonces si no es el tipo de dato esperado podemos manejar ese error y enviar un mensaje de ese error y asi evitar que afecte al flujo de nuestro codigo el trabajar con un tipo de dato erroneo*/

/*
el finally por lo general no es muy utilizado pero un uso que puede tener es del lado del backend, ejemplo si abrimos un archivo de una base de datos pero independientemente de si se carga completamente con el finally que se ejecuta pase lo que pase que haga que se cierre ese archivo al finalizar
*/

/*la ventaja de ir manejando uno mismo los errores es que que nuestro mismo codigo nos vaya identificando y mostrando los errores*/
