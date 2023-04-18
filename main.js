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

/* Método finally(): Este método se utiliza para 
ejecutar un bloque de código después de que la promesa 
se haya resuelto o rechazado, independientemente de si 
ha habido un error o no. El método finally() se utiliza 
típicamente para realizar limpieza o liberación de recursos 
después de la finalización de una tarea. Ejemplo: 
*/

const miPromesa = new Promise((res, rej) => {
  setTimeout(() => {
    res('primer valor resuelto')
  })
})

miPromesa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('La promesa ha finalizado');
  });

