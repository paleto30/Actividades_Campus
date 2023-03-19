/* 
  Investigacion acerca de los tipos de funciones 
  que se manejan en javascript    
*/

/* 

  funciones Autoejecutables 

  Pueden existir casos en los que necesites crear una 
  función y ejecutarla sobre la marcha. En Javascript 
  es muy sencillo crear funciones autoejecutables. Básicamente, 
  sólo tenemos que envolver entre paréntesis la función anónima 
  en cuestión (no necesitamos que tenga nombre, puesto que no la 
  vamos a guardar) y luego, ejecutarla:
  
*/

// Función autoejecutable
(function () {
  console.log("Hola!!");
})();


/* 
De hecho, también podemos utilizar parámetros en 
dichas funciones autoejecutables. Observa que sólo 
hay que pasar dichos parámetros al final de la función autoejecutable. 
*/

// Función autoejecutable con parámetros
(function (name) {
  console.log(`¡Hola, ${name}!`);
})("Andres");