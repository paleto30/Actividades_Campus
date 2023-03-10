/* 
    propiedades y metodos NUMBER
*/
//  Metodo .toPrecision

function precise(x) {
    return x.toPrecision(4);
  }
  
  console.log(precise(123.456));
  
  console.log(precise(0.004));
  
  console.log(precise(1.23e5));


/* 
El método toPrecision() devuelve una cadena 
que representa el objeto Número con la precisión especificada.
*/