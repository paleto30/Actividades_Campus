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

/* ejemplo 3:  Promesa encadenada

   En este ejemplo, creamos una promesa que se resuelve 
   con un valor después de 2 segundos. Utilizamos el método 
   then() para obtener el primer valor resuelto y retornar 
   un segundo valor resuelto. Luego, encadenamos otro método 
   then() para obtener el segundo valor resuelto y mostrarlo 
   en la consola. 
*/

const promise = new Promise((res, rej)=>{
  setTimeout(()=>{
    res('primer valor resuelto')
  })
})

promise.then((primerValor)=>{
  console.log(primerValor);
  return 'Segundo valor resuelto';
})
.then((segundoValor)=>{
  console.log(segundoValor);
})


