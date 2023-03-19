/* 
  Investigacion acerca de los tipos de funciones 
  que se manejan en javascript    
*/

/* 

  funciones callbacks 

  A grandes rasgos, un callback (llamada hacia atrás) 
  es pasar una función B por parámetro a una función A, 
  de modo que la función A puede ejecutar esa función B 
  de forma genérica desde su código, y nosotros podemos 
  definirlas desde fuera de dicha función:

*/

// fB = Función B
const fB = function () {
  console.log("Función B ejecutada.");
};

// fA = Función A
const fA = function (callback) {
  callback();
};

fA(fB);

/* 
 Esto nos podría permitir crear varias funciones para 
 utilizar a modo de callback y reutilizarlas posteriormente 
 con diferentes propósitos. De hecho, los callbacks muchas 
 veces son la primera estrategia que se suele utilizar en 
 Javascript para trabajar la asincronía,
*/