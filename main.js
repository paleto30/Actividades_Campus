/* 
  ¿QUE ES UNA PROMESA?
*/

/* 
  una promesa es un objeto que representa un valor que 
  puede no estar disponible aún, pero que se espera que 
  lo esté en algún momento. Las promesas se utilizan 
  comúnmente para manejar operaciones asincrónicas en 
  JavaScript, como solicitudes de red, operaciones de 
  base de datos o cualquier otra operación que pueda 
  tomar un tiempo indeterminado para completarse.
*/


/* 
  Cuando se crea una promesa, se proporciona una 
  función que define la operación asincrónica que 
  se realizará. Esta función recibe dos parámetros:
  resolve y reject. La función 
  resolve se utiliza para devolver el resultado 
  exitoso de la operación, mientras que la función 
  reject se utiliza para devolver un error si la operación fall
*/

/* 
  Una vez que se ha creado una promesa, se puede utilizar 
  el método then() para especificar una función de 
  retorno de llamada que se ejecutará cuando la 
  operación asincrónica haya finalizado exitosamente. 
  También se puede utilizar el método catch() para 
  especificar una función de retorno de llamada que se 
  ejecutará si la operación falla. 
*/

/* Método Promise.race(): Este método se utiliza para 
ejecutar varias promesas en paralelo y esperar a que la 
primera se haya resuelto o rechazado antes de continuar. 
El método Promise.race() recibe un array de promesas y 
devuelve una nueva promesa que se resuelve o se rechaza 
tan pronto como la primera promesa del array se haya 
resuelto o rechazado. Ejemplo:
*/


const promesa1 = new Promise((resolve) => setTimeout(resolve, 2000, 'Primera promesa resuelta'));
const promesa2 = new Promise((resolve) => setTimeout(resolve, 1000, 'Segunda promesa resuelta'));
const promesa3 = new Promise((reject) => setTimeout(reject, 500, 'Tercera promesa rechazada'));

Promise.race([promesa1, promesa2, promesa3])
  .then((resultado) => {
    console.log(resultado); // 'Tercera promesa rechazada' (la primera en resolver)
  })
  .catch((error) => {
    console.log(error); // Nunca se ejecuta debido a que la promesa1 y la promesa2 resuelven antes de la promesa3
  });