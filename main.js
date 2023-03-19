/* 
  Investigacion acerca Objetos FormData
*/

/* 
  Los objetos FormData le permiten compilar un conjunto 
  de pares clave/valor para enviar mediante XMLHttpRequest. 
  Están destinados principalmente para el envío de los datos 
  del formulario, pero se pueden utilizar de forma independiente 
  con el fin de transmitir los datos tecleados. Los datos transmitidos 
  estarán en el mismo formato que usa el método submit() del 
  formulario para enviar los datos si el tipo de codificación 
  del formulario se establece en "multipart/form-data".
*/


/* 
  Creación de un objeto FormData desde cero
  Usted mismo puede construir un objeto FormData instanciándolo 
  y después añadiendo campos a la instancia usando su método append() , 
  al y como se muestra: 
*/

var formData = new FormData();
formData.append("username", "Groucho");
formData.append("accountnum", 123456); // number 123456 is immediately converted to string "123456"

console.log(formData);