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

/* Método Promise.all(): Este método se utiliza para 
ejecutar varias promesas en paralelo y esperar a que 
todas se hayan resuelto antes de continuar. El método 
Promise.all() recibe un array de promesas y devuelve una 
nueva promesa que se resuelve cuando todas las promesas 
del array se han resuelto, o se rechaza si alguna de las 
promesas se rechaza. Ejemplo:
*/

const promesa1 = Promise.resolve('Primera promesa resuelta');
const promesa2 = Promise.resolve('Segunda promesa resuelta');
const promesa3 = Promise.reject('Tercera promesa rechazada');

Promise.all([promesa1, promesa2, promesa3])
  .then((resultados) => {
    console.log(resultados); // Nunca se ejecuta debido a la promesa3 rechazada
  })
  .catch((error) => {
    console.log(error); // 'Tercera promesa rechazada'
  });
