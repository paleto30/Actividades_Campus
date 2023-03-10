/* 
    propiedades y metodos NUMBER
*/
//  Metodo .toExponential

function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
  }
  
  console.log(expo(123456, 2));

  console.log(expo('123456'));

  console.log(expo('oink'));

/* 
El método toExponential() devuelve una cadena que 
representa el objeto Número en notación exponencial.
*/