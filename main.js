/* 
  Investigacion acerca de los tipos de funciones 
  que se manejan en javascript    
*/

/* 

  funciones Clausuras 

  A grandes rasgos, en Javascript, una clausura o 
  cierre se define como una función que «encierra» 
  variables en su propio ámbito (y que continúan 
  existiendo aún habiendo terminado la función). 
  Por ejemplo, veamos el siguiente ejemplo:
  
*/

// Clausura: Función incr()
const incr = (function () {
  let num = 0;
  return function () {
    num++;
    return num;
  };
})();

typeof incr; // 'function'
console.log(incr()); // 1
console.log(incr()); // 2
console.log(incr()); // 3


/* 
Tenemos una función anónima que es también una 
función autoejecutable. Aunque parece una función 
por expresión, no lo es, ya que la variable incr 
está guardando lo que devuelve la función anónima 
autoejecutable, que a su vez, es otra función diferente.

La «magia» de las clausuras es que en el interior 
de la función autoejecutable estamos creando una variable 
num que se guardará en el ámbito de dicha función, por lo 
tanto existirá con el valor declarado: 0. 
*/