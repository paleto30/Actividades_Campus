/* 
  Investigacion acerca de los tipos de funciones 
  que se manejan en javascript    
*/

/* 

  funciones anónimas 

  Las funciones anónimas o funciones lambda son un tipo 
  de funciones que se declaran sin nombre de función 
  y se alojan en el interior de una variable y haciendo 
  referencia a ella cada vez que queramos utilizarla:

*/

const anonimaSaludar = () =>{ 
  console.log("Hola mundo\nSoy una funcion anonima, almacenada ena variable");
}

console.log(anonimaSaludar);
anonimaSaludar();

/* 
  La diferencia fundamental entre las funciones por declaración 
  y las funciones por expresión es que estas últimas sólo 
  están disponibles a partir de la inicialización de la variable. 
  Si «ejecutamos la variable» antes de declararla, nos dará un error.
*/