/* 
  Investigacion acerca de los tipos de funciones 
  que se manejan en javascript    
*/


/* 
  Hay varias formas de crear funciones en Javascript: por declaración 
  (la más usada por principiantes), por expresión 
  (la más habitual en programadores con experiencia) o 
  mediante constructor de objeto (no recomendada):
*/


// sintaxis para crear una funcion declarativa 

function myFunction(nombre) {
  return `Hola ${nombre}`;
}

let nombre = "Andres Galvis"

console.log(myFunction(nombre));

/* 
  Funciones por declaración

Probablemente, la forma más popular de estas tres, y a la que estaremos 
acostumbrados si venimos de otros lenguajes de programación, es la primera, 
a la creación de funciones por declaración. Esta forma permite declarar una 
función que existirá a lo largo de todo el código:

estas  funciones se pueden ejecutar antes de haberse creado ,
es decir puedes declararla mass abajo de donde necesitas implementarla
  ejm:
*/


console.log(otraFunction());

// como podemos observar primero estoy invocando la funcion en el console.log(),
// y luego la estoy declarando (dando una estructura a dicha funcion)  
function otraFunction() {
  return `hola mundo`
}