/* 
  ¿QUE ES UN CALLBACK?
*/

/* 
  Como hemos dicho, las funciones callback no son más que un 
  tipo de funciones que se pasan por parámetro a otras funciones. 
  Además, los parámetros de dichas funciones toman un valor especial 
  en el contexto del interior de la función.

  En resumen, las funciones callback son una forma de manejar 
  eventos y acciones en un programa de manera modular y escalable. 
  Permiten que una función llame a otra función para manejar una 
  tarea específica, lo que hace que el código sea más fácil de 
  mantener y entender
*/


/* 
  por ejemplo si yo tengo un array de datos y quiero recorrer el array 
  puedo hacer uso de un callback 
  de la siguiente manera:
*/

const personas = ["Andres","Camilo","Sergio","Angie"];

personas.forEach((element, index) =>{     // como podemos observar se le esta pasando una funcion ()=>{}
    console.log("Index: ",index," ","elemento: ",element,);          // como parametro a la funcion forEach();
});


// otro ejemplo de callback es el siguiennte
// tenemos la funcion setTimeout(acc,time); recibe una funcion y un tiempo en milisegundos

setTimeout(()=>{console.log("se ejecuta el callbackc");},2000);
