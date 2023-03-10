/* 
    propiedades y metodos NUMBER
*/
//  Metodo .toFixed

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }
  
  console.log(financial(123.456));
  
  console.log(financial(0.004));
  
  console.log(financial('1.23e+5'));

/* 
El método toFixed() formatea un 
número usando notación de punto fijo.
*/