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

/* ejemplo: 
En este ejemplo, creamos una promesa 
utilizando la sintaxis básica de new Promise(). La promesa espera 
2 segundos antes de resolver con un valor y utilizamos el método 
then() para obtener el valor resuelto y mostrarlo en la consola.
 */
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('valor resuelto de la promesa')
    }, 2000) 
})

myPromise.then((valor)=>{
  console.log(valor);
})


/* ejemplo 2:  Promesa con valor rechazado

  En este ejemplo, creamos una promesa que se 
  rechaza con un mensaje de error después de 2 segundos.
  Utilizamos el método catch() para obtener el valor 
  rechazado y mostrarlo en la consola.
*/

const mypromesa = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    reject('Ocurrio un error al resolver la promesa');
  }, 4000);
})

mypromesa.catch((error)=>{
  console.log(error);
})
