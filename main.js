/* 
  Investigacion acerca de los tipos de funciones 
  que se manejan en javascript    
*/

/* 

  ArrowFunctions  o funciones flecha  

  Las Arrow functions, funciones flecha o «fat arrow» 
  son una forma corta de escribir funciones que aparece en 
  Javascript a partir de ECMAScript 6. Básicamente, 
  se trata de reemplazar eliminar la palabra 
  function y añadir => antes de abrir las llaves:
  

*/
// declaracion
const functionNormal = function () {
  console.log("Función tradicional.");
};
functionNormal();

const functionFlecha = () => {
  console.log("Función flecha.");
};
functionFlecha();

const func = () => "Función flecha."; // 0 parámetros: Devuelve "Función flecha"
const func1 = (e) => e + 1; // 1 parámetro: Devuelve el valor de e + 1
const func2 = (a, b) => a + b; // 2 parámetros: Devuelve el valor de a + b

console.log(func());
console.log(func1(2));
console.log(func2(5,10));
/* 
  Las funciones flecha hacen que el código sea mucho más legible 
  y claro de escribir, mejorando la productividad y la claridad 
  a la hora de escribir código.
*/


/* 
  Sin embargo, las funciones flechas tienen algunas ventajas a la hora de simplificar código bastante interesantes:

  Si el cuerpo de la función sólo tiene una línea, podemos omitir las llaves ({}).
  Además, en ese caso, automáticamente se hace un return de esa única línea, por lo que podemos omitir también el return.
  En el caso de que la función no tenga parámetros, se indica como en el ejemplo anterior: () =>.
  En el caso de que la función tenga un solo parámetro, se puede indicar simplemente el nombre del mismo: e =>.
  En el caso de que la función tenga 2 ó más parámetros, se indican entre paréntesis: (a, b) =>.
  Si queremos devolver un objeto, que coincide con la sintaxis de las llaves, se puede englobar con paréntesis: ({name: 'Manz'}).
*/