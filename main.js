/* 
  Investigacion acerca de los tipos de funciones 
  que se manejan en javascript    
*/

/* 
  Funciones como objetos 
  
  Como curiosidad, debes saber que se pueden declarar 
  funciones como si fueran objetos. Sin embargo, es un 
  enfoque que no se suele utilizar en producción. 
  Simplemente es interesante saberlo para darse cuenta 
  que en Javascript todo pueden ser objetos:
*/

const saludar = new Function("return 'Hola';");

console.log(saludar()); // 'Hola'